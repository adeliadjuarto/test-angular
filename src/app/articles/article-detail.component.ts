import { Component } from '@angular/core';
import { Article, ArticleService } from './article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'article-detail',
  template: `
    <div *ngIf="article">
        <div>
            <b>Title</b>: {{article.title}}
        </div>
        <div>
            <b>Content</b>: {{article.content}}
        </div>
    </div>
  `,
})
export class ArticleDetailComponent  { 
    article: Article;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ArticleService
    ) {}

    ngOnInit() {
        this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) => this.service.getArticle(+params['id']))
        .subscribe((article: Article) => this.article = article);
    }
}
