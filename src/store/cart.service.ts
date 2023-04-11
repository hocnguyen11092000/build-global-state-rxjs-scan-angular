import { Injectable } from '@angular/core';
import { BehaviorSubject, scan } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartState {
  initialState: any = {};
  cartSubJect = new BehaviorSubject(this.initialState);

  state$ = this.cartSubJect
    .asObservable()
    .pipe(scan((state, patialState) => ({ ...state, ...patialState }), {}));
}
