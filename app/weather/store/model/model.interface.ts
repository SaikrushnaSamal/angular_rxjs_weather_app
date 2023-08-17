export interface Weather {
  date: string,
  temperature: string,
  description: string,
  icon: string,
}

export interface WeatherForecast {
  city: string,
  weather: Weather[],
}

export interface WeatherState {
  cities: WeatherForecast[];
  loading: boolean;
  error: any;
}