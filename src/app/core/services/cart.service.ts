import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items = signal<Item[]>([]);
  error$ = new BehaviorSubject<string | null>(null);

  addItem(item: Item) {
    if (item.type === 'sandwich' && this.items().some((i) => i.type === 'sandwich')) {
      return this.error$.next('Solo puedes agregar un (1) sándwich');
    }
    if (item.name === 'Fries' && this.items().some((i) => i.name === 'Fries')) {
      return this.error$.next('Solo puedes agregar una porción de papas');
    }
    if (item.name === 'Soft drink' && this.items().some((i) => i.name === 'Soft drink')) {
      return this.error$.next('Solo puedes agregar una bebida');
    }

    this.items.set([...this.items(), item]);
    this.error$.next(null);
  }

  getItems() {
    return [...this.items()];
  }

  clear() {
    this.items.set([]);
    this.error$.next(null);
  }
}
