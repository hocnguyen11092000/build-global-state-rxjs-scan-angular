import { Component, OnInit } from '@angular/core';
import { products } from 'src/data';
import { CartState } from 'src/store/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products = products;
  count = 1;
  constructor(private cartState: CartState) {}

  ngOnInit(): void {}

  handleAddToCart(item: any) {
    let foundProduct = this.cartState.cartSubJect.value?.cart?.findIndex(
      (c: any) => c.id === item.id
    );
    if (foundProduct > -1 && this.cartState.cartSubJect.value.cart) {
      this.cartState.cartSubJect.value.cart[foundProduct].quantity =
        +this.cartState.cartSubJect.value?.cart[foundProduct]?.quantity +
        +this.count;
    } else {
      item.quantity = 1;
      this.cartState.cartSubJect.value.cart = [
        ...(this.cartState.cartSubJect.value?.cart || []),
        item,
      ];
    }

    this.cartState.cartSubJect.next({
      cart: [...this.cartState.cartSubJect.value?.cart],
    });
  }
}
