import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFindByCityComponent } from './input-find-by-city.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('InputFindByCityComponent', () => {
  let component: InputFindByCityComponent;
  let fixture: ComponentFixture<InputFindByCityComponent>;
  const httpStub: any = {
    get: () => of({}),
    post: () => of({}),
    put: () => of({}),
    delete: () => of({}),
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFindByCityComponent],
      providers: [{
        provide: HttpClient,
        useValue: httpStub
      }],
      imports:[
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(InputFindByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
