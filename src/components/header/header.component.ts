import { Component, OnInit } from '@angular/core';
import { IAuthState } from 'src/store/auth.service';
import { CartState } from 'src/store/cart.service';
import { globalState } from 'src/store/index.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private globalStateService: globalState,
    private cart: CartState
  ) {}
  user: IAuthState = {};
  count = 0;

  ngOnInit(): void {
    this.globalStateService?.getSingleState('auth')?.subscribe((val) => {
      this.user = val || {};
    });

    this.globalStateService?.getSingleState('cart')?.subscribe((val) => {
      const _cart = _.get(val, 'carts');

      if (_.size(_cart)) {
        this.count = _.size(_cart);
      }
    });
  }

  handleClearData() {
    this.globalStateService.clearData();
  }
}
