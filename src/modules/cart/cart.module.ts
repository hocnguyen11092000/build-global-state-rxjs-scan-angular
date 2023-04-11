import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/components/header/header.component';
import { ProductComponent } from 'src/components/product/product.component';
import { CartComponent } from 'src/components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from 'src/components/login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [HeaderComponent, ProductComponent, CartComponent, LoginComponent],
})
export class CartModule {}
