import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'; // ✅ Import MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field'; // ✅ Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // ✅ Import MatInputModule
import { MatButtonModule } from '@angular/material/button'; // ✅ Import MatButtonModule
import { MatError } from '@angular/material/form-field'; // ✅ Import MatError

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // ✅ Required for [(ngModel)]
    MatCardModule, // ✅ Required for <mat-card>
    MatFormFieldModule, // ✅ Required for <mat-form-field>
    MatInputModule, // ✅ Required for <input matInput>
    MatButtonModule,
    MatError // ✅ Required for <button mat-button>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
