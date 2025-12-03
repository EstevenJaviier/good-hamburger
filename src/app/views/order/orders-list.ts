import { Component } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.html',
  imports: [DatePipe, RouterLink, CurrencyPipe]
})
export class OrdersList {
  constructor(public orderService: OrderService) {}
}
