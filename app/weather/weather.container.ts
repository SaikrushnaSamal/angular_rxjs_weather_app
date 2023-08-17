import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as WeatherActions from './store/actions/weather';
import { WeatherState } from './store/model/model.interface';

@Component({
  selector: 'app-weather',
  template: `
  <app-search (searchEvent)="citySearch($event)"></app-search>
  <app-results></app-results>  `
})
export class WeatherContainer {

  constructor(private store: Store<WeatherState>) { }

  citySearch(event: string) {
    // TO BE IMPLMENTED
    this.store.dispatch(WeatherActions.searchWeather({ city: event }));
  }
}
