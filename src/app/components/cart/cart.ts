import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { OrderService } from '../../core/services/order.service';
import { calculateDiscount } from '../../core/utils/discount.util';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  imports: [FormsModule, AsyncPipe, CurrencyPipe],
})
export class Cart {
  customer = signal<string>('');
  showErrors = signal<boolean>(false);

  public cart = inject(CartService);
  private orderService = inject(OrderService);

  get total() {
    return this.cart.getItems().reduce((sum, item) => sum + item.price, 0);
  }

  get discountPercent() {
    return calculateDiscount(this.cart.getItems());
  }

  get finalPrice() {
    return this.total - this.total * this.discountPercent;
  }

  submitOrder() {
    this.showErrors.set(false);

    if (!this.customer().trim() || !this.cart.getItems().length) {
      this.showErrors.set(true);
      return;
    }

    this.orderService.submitOrder(
      this.customer(),
      this.cart.getItems(),
      this.finalPrice,
      this.discountPercent
    );

    this.customer.set('');
    this.cart.clear();
  }
}
