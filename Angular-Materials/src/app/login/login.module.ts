import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LoginComponent], // Declare LoginComponent
  imports: [
    CommonModule,
    FormsModule, // Required for [(ngModel)]
    MatCardModule, // Required for <mat-card>
    MatFormFieldModule, // Required for <mat-form-field>
    MatInputModule, // Required for <input matInput>
    MatButtonModule // Required for <button mat-button>
  ],
  exports: [LoginComponent] // Export component if needed in other modules
})
export class LoginModule { }
