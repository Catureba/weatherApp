import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFindByCityComponent } from './input-find-by-city.component';

describe('InputFindByCityComponent', () => {
  let component: InputFindByCityComponent;
  let fixture: ComponentFixture<InputFindByCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFindByCityComponent]
    });
    fixture = TestBed.createComponent(InputFindByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
