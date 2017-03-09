import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from './articles/articles.component';
import {ArticleDetailComponent} from './articles/article-detail.component';

const routes: Routes = [
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}