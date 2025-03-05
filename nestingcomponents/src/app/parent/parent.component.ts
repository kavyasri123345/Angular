import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentModule } from './parent.module';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports:[CommonModule,ParentModule,ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage = 'Hello from Parent!';
}

