import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Root component
//import { UserModule } from './user/user.module'; // Feature module

@NgModule({
  declarations: [AppComponent],
 // imports: [BrowserModule, UserModule], // Import the feature module
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

