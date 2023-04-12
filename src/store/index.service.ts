import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  last,
  map,
  of,
  scan,
  takeLast,
} from 'rxjs';
import { CartState } from './cart.service';
import { AuthState } from './auth.service';

export interface IGlobalState {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class globalState {
  globalState: Observable<IGlobalState> | null;

  constructor(private cartState: CartState, private authState: AuthState) {
    this.globalState = combineLatest([
      this.cartState.state$,
      this.authState.state$,
    ]).pipe(map(([cart, auth]) => ({ cart, auth })));
  }

  getState(): Observable<IGlobalState> | null {
    return this.globalState;
  }

  getSingleState(type: string): Observable<IGlobalState> | null {
    if (!type) return null;

    return (
      this.globalState &&
      this.globalState.pipe(
        map((val) => {
          return val[type];
        })
      )
    );
  }
}
