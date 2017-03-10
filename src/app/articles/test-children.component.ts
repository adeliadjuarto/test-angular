import { Component, OnInit } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'test-children',
  template: `
    <div>
        Test Children 
    </div>
    
    <div *ngIf="isVisible">
        Hidden Text
    </div>

    <div>{{changedText}}</div>
  `,
})
export class TestChildrenComponent implements OnInit{
    isVisible: Boolean;
    changedText:string;
    constructor(){}
    
    ngOnInit(){
        this.isVisible = false;
        this.changedText = "text";
    }
    
    show(){
        this.isVisible = true;
    }

    changeText(content:string){
        this.changedText = content;
        console.log(this.changedText);
    }

 }
