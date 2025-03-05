import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component'; // Import the component
import { LifecycleDemoModule } from './lifecycle-demo/lifecycle-demo.module';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleDemoComponent  // Declare the component here
  ],
  imports: [
    BrowserModule,LifecycleDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
