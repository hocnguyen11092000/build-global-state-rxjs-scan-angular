import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map, scan } from 'rxjs';
import { CartState } from './cart.service';
import { AuthState } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class globalState {
  globalState: any;

  constructor(private cartState: CartState, private authState: AuthState) {
    this.globalState = combineLatest([
      this.cartState.state$,
      this.authState.state$,
    ]).pipe(map(([cart, auth]) => ({ cart, auth })));
  }

  getState(): Observable<any> {
    return this.globalState;
  }
}
