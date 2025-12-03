import { Item } from './item.model';

export interface Order {
  id: number;
  customer: string;
  items: Item[];
  total: number;
  discountApplied: number;
  timestamp: string;
}
