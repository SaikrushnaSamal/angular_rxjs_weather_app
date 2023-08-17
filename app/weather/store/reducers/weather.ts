import { createReducer, on } from '@ngrx/store';
import { WeatherState } from '../model/model.interface';
import { searchWeather, searchWeatherSuccess, searchWeatherFailure } from '../actions/weather';

export const initialState: WeatherState = {
  cities: [],
  loading: false,
  error: null,
};

export const weatherReducer = createReducer(
  initialState,
  on(searchWeather, (state) => { 
    return {
      ...state,
      loading: true,
      error: false,
    };
  }),
  on(searchWeatherSuccess, (state, { weather }) => {
    const existingCityIndex = state.cities.findIndex(city => city.city === weather.city);
    // Don't add if there is already an entry for the city
    if (existingCityIndex !== -1) {
      const updatedCities = [...state.cities];
      updatedCities[existingCityIndex] = weather;
      return {
        ...state,
        cities: updatedCities,
        loading: false,
        error: false,
      };
    }
    return {
      ...state,
      cities: [...state.cities, weather],
      loading: false,
      error: false,
    };
  }),
  on(searchWeatherFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  })
);

