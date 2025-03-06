import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { AppComponent } from './app/app.component';
import { UserListComponent } from './app/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Add HttpClientModule to imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

