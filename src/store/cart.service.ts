import { Injectable } from '@angular/core';
import { BehaviorSubject, scan } from 'rxjs';
import * as _ from 'lodash';
export interface ICartState {
  carts: ICardItem[];
}

export interface ICardItem {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class CartState {
  initialState: ICartState = {
    carts: [],
  };
  private cartSubJect = new BehaviorSubject(this.initialState);

  reducer = {
    setCart: (payload: any) => {
      const carts = this.getState.carts;

      if (_.isArray(carts)) {
        const _idx = _.findIndex(carts, (i: any) => i.id === payload.id);

        if (_idx > -1) {
          _.set(carts[_idx], 'quantity', (payload.quantity += 1 || 0));
          this.cartSubJect.next({ carts: [...carts] });
        } else {
          _.set(payload, 'quantity', 1);
          this.cartSubJect.next({ carts: [...carts, payload] });
        }

        console.log(this.getState);
      }
    },
  };

  get getState() {
    return this.cartSubJect.value;
  }

  state$ = this.cartSubJect
    .asObservable()
    .pipe(scan((state, patialState) => ({ ...state, ...patialState }), {}));
}
