import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherForecast } from '../weather/store/model/model.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  apiKey = '704b389320390b76bb53ef2b94209bd5';
  url = 'https://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: this.apiKey,
  };

 constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherForecast> {
    this.params.q = city;
    var queryString = Object.keys(this.params).map(key => key + '=' + this.params[key]).join('&');
    const url = `${this.url}?` + queryString;
    return this.http.get<any>(url).pipe(
      map((response) => this.mapResponseToWeatherForecast(response))
    );
  }

  private mapResponseToWeatherForecast(response: any): WeatherForecast{
    let ob: WeatherForecast = {city: '', weather: []};
    ob.city = response.city.name
    response.list.map((item: any) => {
      ob.weather.push({
        date: item.dt,
        temperature: item.main.temp,
        description: item.weather[0].description,
        icon: item.weather[0].icon
      });
    });
    return ob;
  }

}
