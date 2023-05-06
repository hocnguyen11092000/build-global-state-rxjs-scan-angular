import { Injectable } from '@angular/core';
import { BehaviorSubject, scan } from 'rxjs';

export interface IAuthState {
  user?: {
    userName?: string;
    passWord?: string;
  };

  token?: string | null;
}
@Injectable({
  providedIn: 'root',
})
export class AuthState {
  initialState: IAuthState = {
    user: {},
    token: null,
  };

  reducer = {
    storeUser: (payload: any) => {
      this.authSubJect.next({ user: payload });
    },

    setToken: (payload: any) => {
      this.authSubJect.next({ token: payload });
    },
  };

  authSubJect = new BehaviorSubject(this.initialState);

  state$ = this.authSubJect
    .asObservable()
    .pipe(scan((state, patialState) => ({ ...state, ...patialState }), {}));
}
