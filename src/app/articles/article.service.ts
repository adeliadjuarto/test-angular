import { Injectable } from '@angular/core';

export class Article{
    constructor(public id:number, public title:string, public content:string){}
}

let ARTICLES = [
    new Article(1, "Article 1", "Content Article 1"),
    new Article(2, "Article 2", "Content Article 2"),
    new Article(3, "Article 3", "Content Article 3")
];

let articlesPromise = Promise.resolve(ARTICLES);

@Injectable()
export class ArticleService {
  getArticles() { return articlesPromise; }

  getArticle(id: number | string) {
    return articlesPromise
      .then(articles => articles.find(article => article.id === +id));
  }
}
