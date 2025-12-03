import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private http: HttpClient) {}

  getMenu(): Observable<Item[]> {
    return this.http.get<Item[]>('assets/menu.json').pipe(
      delay(1000)
    );
  }
}
