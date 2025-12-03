import { Injectable, signal } from '@angular/core';
import { Item } from '../models/item.model';
import { Order } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private orders = signal<Order[]>([]);
  private idCounter = signal<number>(1);

  submitOrder(customer: string, items: Item[], total: number, discount: number) {
    const order: Order = {
      id: this.idCounter(),
      customer,
      items,
      total,
      discountApplied: discount,
      timestamp: new Date().toISOString(),
    };

    this.idCounter.update((value) => value + 1);
    this.orders.set([...this.orders(), order]);
  }

  getOrders() {
    return [...this.orders()];
  }
}
