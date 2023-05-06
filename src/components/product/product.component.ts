import { Component, OnInit } from '@angular/core';
import { products } from 'src/data';
import { AuthState } from 'src/store/auth.service';
import { CartState } from 'src/store/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products = products;
  count = 1;
  constructor(private cartState: CartState, private authState: AuthState) {}

  ngOnInit(): void {}

  handleAddToCart(item: any) {
    this.cartState.reducer.setCart(item);
  }

  forkSetToken() {
    this.authState.reducer.setToken('456');
  }
}
