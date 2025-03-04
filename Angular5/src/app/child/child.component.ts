import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class ChildComponent {
  @Input() name: string = '';  // ✅ Declare 'name' as an Input
}


