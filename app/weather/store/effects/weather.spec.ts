// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { Actions } from '@ngrx/effects';
import { of, throwError } from 'rxjs';
import { WeatherEffects } from '../effects/weather';
import * as WeatherActions from '../actions/weather';
import { WeatherService } from '../../weather.service';
import { WeatherForecast } from '../model/model.interface';

describe('WeatherEffects', () => {
  let weatherEffects: WeatherEffects;
  let actions$: Actions;
  let weatherService: jasmine.SpyObj<WeatherService>;

  beforeEach(() => {
    actions$ = new Actions(of());
    weatherService = jasmine.createSpyObj('WeatherService', ['getWeather']);
    weatherEffects = new WeatherEffects(actions$, weatherService);
  });

  it('should dispatch searchWeatherSuccess action on successful weather retrieval', () => {
    const city = 'London';
    let weather: WeatherForecast = {city: 'London', weather: []};
    weather.weather.push({
        date: '1683806400',
        temperature: '21',
        description: 'clear sky',
        icon: '800'
      });
    
    const action = WeatherActions.searchWeather({ city });
    const expectedResult = WeatherActions.searchWeatherSuccess({ weather });

    weatherService.getWeather.and.returnValue(of(weather));

    weatherEffects.searchWeather$.subscribe(result => {
      expect(result).toEqual(expectedResult);
    });
  });

  it('should dispatch searchWeatherFailure action on weather retrieval error', () => {
    const city = 'London';
    const error = new Error('Weather fetch error');
    const action = WeatherActions.searchWeather({ city });
    const expectedResult = WeatherActions.searchWeatherFailure({ error });

    weatherService.getWeather.and.returnValue(throwError(error));

    weatherEffects.searchWeather$.subscribe(result => {
      expect(result).toEqual(expectedResult);
    });
  });
});
