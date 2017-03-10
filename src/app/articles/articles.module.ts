import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ArticlesComponent }    from './articles.component';
import { ArticleDetailComponent }  from './article-detail.component';
import { ArticleService } from './article.service'; 
import { ArticleRoutingModule } from './article-routing.module';
import { TestEventEmitterComponent } from './test-eventemitter.component';
import { TestChildrenComponent }  from './test-children.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticlesComponent,
    ArticleDetailComponent,
    TestEventEmitterComponent,
    TestChildrenComponent
  ],
  providers: [ ArticleService ]
})
export class ArticlesModule {}