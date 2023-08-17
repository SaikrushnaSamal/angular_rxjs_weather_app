import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { WeatherService } from '../../weather.service';
import * as WeatherActions from '../actions/weather';
import { searchWeatherFailure } from '../actions/weather';
@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
  ) { }
  searchWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.searchWeather),
      mergeMap((action) =>
        this.weatherService.getWeather(action.city).pipe(
          map((weather) => {
            return WeatherActions.searchWeatherSuccess({ weather: weather });
          }),
          catchError((error) => of(searchWeatherFailure({ error })))
        )
      )
    ),
    { dispatch: true }
  );
}
