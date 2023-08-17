// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { createAction, props } from '@ngrx/store';
import { WeatherForecast } from '../model/model.interface';

export enum WeatherActionTypes {
  SearchWeather = '[Weather] Search Weather',
  SearchWeatherSuccess = '[Weather] Search Weather Success',
  SearchWeatherFailure = '[Weather] Search Weather Failure',
}

export const searchWeather = createAction(
  WeatherActionTypes.SearchWeather,
  props<{ city: string }>()
);

export const searchWeatherSuccess = createAction(
  WeatherActionTypes.SearchWeatherSuccess,
  props<{ weather: WeatherForecast }>()
);

export const searchWeatherFailure = createAction(
  WeatherActionTypes.SearchWeatherFailure,
  props<{ error: any }>()
);