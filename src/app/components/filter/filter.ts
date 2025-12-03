import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.html'
})
export class Filter {

  @Output() changeFilter = new EventEmitter<'all' | 'sandwich' | 'extra'>();

  setFilter(type: 'all' | 'sandwich' | 'extra') {
    this.changeFilter.emit(type);
  }
}
