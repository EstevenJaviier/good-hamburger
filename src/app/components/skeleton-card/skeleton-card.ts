import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-card',
  imports: [],
  templateUrl: './skeleton-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonCard { }
