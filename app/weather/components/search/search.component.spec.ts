import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // IMPLEMENT TESTS HERE
  it('should emit searchEvent with the input value', () => {
    const inputValue = 'example city';
    component.inputValue = inputValue;

    spyOn(component.searchEvent, 'emit');

    const event = new Event('submit');
    component.search(event);

    expect(component.searchEvent.emit).toHaveBeenCalledWith(inputValue);
    expect(component.inputValue).toEqual('');
  });
});

