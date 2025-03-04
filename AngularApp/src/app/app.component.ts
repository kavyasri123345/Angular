import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  // Add the missing method
 // onClick() {
    //console.log('Button clicked!');
    isDisabled = true; // or false, depending on what you want
  buttonText = "Click Me"; // Set default button text
}


