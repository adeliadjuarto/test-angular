import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Article, ArticleService } from './article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'articles',
  template: `
    <ul>
        <li *ngFor="let article of articles | async"
        [class.selected] = "isSelected(article)"
        (click)="onSelect(article)"
        >
                {{article.id}}. {{article.title}}
        </li>
    </ul>
    
    <router-outlet></router-outlet>
  `,
})
export class ArticlesComponent implements OnInit {
    articles: Observable<Article[]>;
    private selectedId:number;

    constructor(
        private service:ArticleService,
        private route:ActivatedRoute,
        private router:Router
    ){}

    ngOnInit(){
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


 }
