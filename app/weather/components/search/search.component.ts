import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED
  @Output() searchEvent = new EventEmitter();
  inputValue: string;
  constructor() { }

  search(event: Event) {
    // TO BE IMPLEMENTED
    event.preventDefault();
    this.searchEvent.emit(this.inputValue);
    this.inputValue = '';
  }
}
