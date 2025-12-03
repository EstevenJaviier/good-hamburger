import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Item } from '../../core/models/item.model';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe],
  templateUrl: './card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  item = input.required<Item>();

  private cartService = inject(CartService);

  addToCart(item: Item) {
    this.cartService.addItem(item);
  }
}
