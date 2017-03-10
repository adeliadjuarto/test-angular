import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'test-eventemitter',
  template: `
    <div>
        Test Event Emitter Scope:{{messageFromParent}}
        <button (click)="alertParent()">Send Message to Parent</button>
    </div>
    
  `,
})
export class TestEventEmitterComponent{
    @Input('message') messageFromParent:string;
    @Output() sendMessageToParent:EventEmitter<string> = new EventEmitter();

    alertParent(){
        this.sendMessageToParent.emit("This is message from child!");
    }

 }
