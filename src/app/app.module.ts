import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ArticlesComponent } from './articles/articles.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ArticlesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
