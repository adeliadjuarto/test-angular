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
    public justText:string = "text from child";
    constructor(){}
    
    ngOnInit(){
        this.isVisible = false;
    }
    
    show(){
        this.isVisible = true;
    }

    returnJustText(){
        return this.justText;
    }

 }
