import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',  // ✅ Ensure this matches in app.component.html
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css']
})
export class LifecycleDemoComponent implements OnInit, OnChanges, OnDestroy {
  count = 0;

  constructor() {
    console.log('Constructor: Component created');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Input property changes', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialized');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component about to be destroyed');
  }

  increment() {
    this.count++;
  }
}
