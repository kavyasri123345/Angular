import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child', // This must match the tag in parent.component.html
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childMessage: string = ''; // Receiving input data from the parent
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from Child!');
  }
}

