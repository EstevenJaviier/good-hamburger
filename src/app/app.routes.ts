import { Routes } from '@angular/router';
import { OrdersList } from './views/order/orders-list';
import { MenuList } from './views/menu/menu-list';

export const routes: Routes = [
  { path: '', component: MenuList },
  { path: 'orders', component: OrdersList },
  { path: '**', redirectTo: '' },
];
