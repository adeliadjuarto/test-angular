import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ArticlesComponent }    from './articles.component';
import { ArticleDetailComponent }  from './article-detail.component';
import { ArticleService } from './article.service'; 
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticlesComponent,
    ArticleDetailComponent
  ],
  providers: [ ArticleService ]
})
export class ArticlesModule {}