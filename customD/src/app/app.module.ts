import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HoverHighlightDirective } from './hover-highlight.directive'; // Import directive

@NgModule({
  declarations: [
    AppComponent,
    HoverHighlightDirective // Register directive
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
