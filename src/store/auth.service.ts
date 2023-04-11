import { Injectable } from '@angular/core';
import { BehaviorSubject, scan } from 'rxjs';

export interface IAuthState {
  user?: {
    userName?: string;
    passWord?: string;
  };
}

export const STORE_USER_ACTON: any = {
  TYPE: 'STORE_USER_ACTTION',
  PAYLOAD: null,
};

@Injectable({
  providedIn: 'root',
})
export class AuthState {
  initialState: IAuthState = {};
  authSubJect = new BehaviorSubject(this.initialState);

  state$ = this.authSubJect
    .asObservable()
    .pipe(scan((state, patialState) => ({ ...state, ...patialState }), {}));

  executeAction(type: string, payload: IAuthState) {
    if (type) {
      switch (type) {
        case STORE_USER_ACTON.TYPE:
          this.authSubJect.next(payload);
      }
    }
  }
}
