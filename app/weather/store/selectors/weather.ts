import { WeatherState } from '../model/model.interface';

export const selectState = (state: WeatherState) => state[0];

export const selectStateError = (state: WeatherState) => state[0].error;

export const selectStateIsLoading = (state: WeatherState) => state[0].loading;
