import { Component, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast, WeatherState } from '../../store/model/model.interface';
import { selectState, selectStateError, selectStateIsLoading } from '../../store/selectors/weather';
import { select, Store } from '@ngrx/store';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {
  cities$: Observable<WeatherForecast[]>;
  error$: Observable<Boolean>;
  isLoading$: Observable<Boolean>;

  constructor(private store: Store<WeatherState>) {

    this.cities$ = this.store.pipe(select(selectState));

    this.error$ = this.store.pipe(select(selectStateError));

    this.isLoading$ = this.store.pipe(select(selectStateIsLoading));

  }

  ngOnChanges() {
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
  }
}


