import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [ChildComponent], // Declare ChildComponent
  imports: [CommonModule], // Import CommonModule for Angular directives
  exports: [ChildComponent] // Export ChildComponent so ParentComponent can use it
})
export class ChildModule { }
