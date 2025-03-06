import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
//import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-services-example';
}
