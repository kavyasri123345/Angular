import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TitleCasePipe } from './title-case.pipe'; // Import the custom pipe

@NgModule({
  declarations: [
    AppComponent,
    TitleCasePipe // Register the pipe
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
