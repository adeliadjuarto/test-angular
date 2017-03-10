import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Article, ArticleService } from './article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TestChildrenComponent } from './test-children.component';
@Component({
  moduleId:module.id,
  selector: 'articles',
  templateUrl: './articles.component.html',
})
export class ArticlesComponent implements OnInit {
    @ViewChild(TestChildrenComponent) children: TestChildrenComponent;
    articles: Observable<Article[]>;
    private selectedId:number;
    values: string;
    private maxArticleId:number;
    isVisible:Boolean;
    toggleText:string;
    messageFromChild:string;
    parentText:string;

    constructor(
        private service:ArticleService,
        private route:ActivatedRoute,
        private router:Router
    ){}

    ngOnInit(){
      this.children = new TestChildrenComponent();
      this.service.getArticles().then(articles => this.maxArticleId = articles.length);
      this.isVisible = false;
      this.toggleText = "Show Form";
      this.parentText = "Parent Text";

        this.articles = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getArticles();
      });
      
    }

    isSelected(article: Article) { return article.id === this.selectedId; }

    onSelect(article: Article) {
        this.router.navigate(['/articles/detail/', article.id]);
    }
    
    addArticle(title: string, content:string){
      this.maxArticleId++;
      this.service.getArticles().then(articles => articles.push(new Article(this.maxArticleId,title,content)));
    }

    toggleArticleForm(){
        this.isVisible = !this.isVisible;
        if(this.isVisible){
          this.toggleText = "Hide Form";
        }else{
          this.toggleText = "Show Form";
        }
    }

    showSomething(){
      this.children.show();
    }

    changeText(){
      this.children.changeText("changed text");
    }

    changeParentText(){
      this.parentText = "Changed Parent Text";
    }
 }
