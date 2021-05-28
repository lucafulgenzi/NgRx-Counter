import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from './counter.actions';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset</button>
    <div>
      Current Count: {{ count$ | async }}
    </div>
  `,
  styles: [
  ]
})
export class CounterComponent {
  count$: Observable<number>;

  constructor( private store: Store<{count: number}>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
