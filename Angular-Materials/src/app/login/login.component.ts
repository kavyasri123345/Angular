import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  imports:[CommonModule],


})
export class LoginComponent {
  username: string = ''; // Define the username property
  password: string = ''; // Define the password property
  submitted: boolean = false; // Track form submission status

  onSubmit() {
    this.submitted = true; // Mark form as submitted
    if (this.username && this.password) {
      console.log('Login successful:', this.username, this.password);
    } else {
      console.log('Please fill in both fields.');
    }
  }
}
