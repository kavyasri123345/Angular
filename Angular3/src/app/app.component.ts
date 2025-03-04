import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Basics';
  description = 'This is a simple Angular application demonstrating components and data binding.';
  name: string = '';
}
