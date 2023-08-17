import { async, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherContainer } from './weather.container';
import { Store, StoreModule } from '@ngrx/store';
import { WeatherState } from './store/model/model.interface';
import * as WeatherActions from './store/actions/weather';

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let mockStore: jasmine.SpyObj<Store<WeatherState>>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ WeatherContainer ],
      imports: [
        StoreModule.forRoot({})
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockStore = jasmine.createSpyObj('Store', ['dispatch']);
    component = new WeatherContainer(mockStore);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // PLEASE IMPLEMENT MORE TESTS
  it('should dispatch searchWeather action when citySearch is called', () => {
    const city = 'London';
    component.citySearch(city);
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      WeatherActions.searchWeather({ city: city }));
  });
});
