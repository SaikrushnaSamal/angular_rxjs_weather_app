// import { TestBed, async, ComponentFixture } from '@angular/core/testing';
// import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { WeatherContainer } from './weather/weather.container';

// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports:[WeatherModule, WeatherContainer],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   // it('should create the app', () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   const app = fixture.debugElement.componentInstance;
//   //   expect(app).toBeTruthy();
//   // });

//   it('-- should create the app', () => {
//     expect(component).toBeTruthy();
//   });

//   // it(`should have as title 'scrumconnect-angular-test'`, () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   const app = fixture.debugElement.componentInstance;
//   //   expect(app.title).toEqual('scrumconnect-angular-test');
//   // });

//   // it('should render title in a h1 tag', () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   fixture.detectChanges();
//   //   const compiled = fixture.debugElement.nativeElement;
//   //   expect(compiled.querySelector('aimport { WeatherModule } from './weather/weather.module';').textContent).toContain('Welcome to scrumconnect-angular-test!');
//   // });
// });



import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[WeatherModule, ],
      declarations: [AppComponent],
    }).compileComponents();
  });



  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have title property initialized', () => {
    expect(component.title).toEqual('scrumconnect-angular-test');
  });

  it('should render title in the template', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain(component.title);
  });
});
