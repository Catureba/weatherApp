import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageComponent } from './list-page.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputFindByCityComponent } from '../../shared/input-find-by-city/input-find-by-city.component';
import { of } from 'rxjs';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  const httpStub: any = {
    get: () => of({}),
    post: () => of({}),
    put: () => of({}),
    delete: () => of({}),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPageComponent, InputFindByCityComponent],
      providers: [{
        provide: HttpClient,
        useValue: httpStub
      }],
      imports:[
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should replace complete date with simple date', () => {
    const inputDate = '2023-10-19T12:00:00';
    const expectedSimpleDate = '2023/10/19';

    const result = component.replaceDateCompletToSimpleDate(inputDate);

    expect(result).toEqual(expectedSimpleDate);
  });



});
