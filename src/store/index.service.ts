import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  combineLatest,
  last,
  map,
  of,
  scan,
  takeLast,
  takeUntil,
  tap,
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
  private destroy$ = new Subject();

  constructor(private cartState: CartState, private authState: AuthState) {
    this.globalState = combineLatest([
      this.cartState.state$,
      this.authState.state$,
    ]).pipe(
      tap((val) => console.log(val)),
      takeUntil(this.destroy$),
      map(([cart, auth]) => ({ cart, auth }))
    );
  }

  getState(): Observable<IGlobalState> | null {
    return this.globalState;
  }

  clearData() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  getSingleState(type: string): Observable<IGlobalState> | null {
    if (!type) return null;

    return this.globalState
      ? this.globalState.pipe(
          map((val) => {
            return val[type];
          })
        )
      : null;
  }
}
