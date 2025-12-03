import { Component, inject, OnInit, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { Cart } from '../../components/cart/cart';
import { Filter } from '../../components/filter/filter';
import { SkeletonCard } from '../../components/skeleton-card/skeleton-card';
import { Item } from '../../core/models/item.model';
import { MenuService } from '../../core/services/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.html',
  imports: [Filter, Cart, SkeletonCard, Card],
})
export class MenuList implements OnInit {
  menu = signal<Item[]>([]);
  filtered = signal<Item[]>([]);
  loading = signal<boolean>(true);
  hasError = signal<boolean>(false);

  private menuService = inject(MenuService);

  ngOnInit(): void {
    this.menuService.getMenu().subscribe({
      next: (data) => {
        this.menu.set(data);
        this.filtered.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.hasError.set(true);
        this.loading.set(false);
      },
    });
  }

  filter(type: 'all' | 'sandwich' | 'extra') {
    if (type === 'all') this.filtered.set(this.menu());
    else this.filtered.set(this.menu().filter((item) => item.type === type));
  }
}
