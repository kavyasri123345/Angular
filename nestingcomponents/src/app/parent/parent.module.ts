import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component'; // Import ChildComponent

@NgModule({
  //declarations: [ParentComponent], // Add ChildComponent
  imports: [CommonModule,ParentComponent,ChildComponent],
  exports: [ParentComponent] // Export ParentComponent if needed
})
export class ParentModule { }
