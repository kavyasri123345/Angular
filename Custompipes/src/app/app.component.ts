import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = 'hello world';

  constructor(private titleCasePipe: TitleCasePipe) {}

  getTitleCaseText() {
    return this.titleCasePipe.transform(this.text);
  }
}
