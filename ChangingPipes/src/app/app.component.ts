import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Hello World'; // Define the 'message' property
  price: number = 1234.56; // Define the 'price' property
}