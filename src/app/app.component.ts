import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <a routerLink="/articles" routerLinkActive="active">Articles</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { }
