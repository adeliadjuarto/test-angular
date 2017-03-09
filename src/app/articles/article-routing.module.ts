import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent }    from './articles.component';
import { ArticleDetailComponent }  from './article-detail.component';

const articlesRoutes: Routes = [
  { path: 'articles',  component: ArticlesComponent },
  { path: 'articles/detail/:id', component: ArticleDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/