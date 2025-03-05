
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  price: number = 1000; // ✅ Define price
}
