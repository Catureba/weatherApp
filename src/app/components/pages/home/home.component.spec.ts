import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { InputFindByCityComponent } from '../../shared/input-find-by-city/input-find-by-city.component';
import { FormsModule } from '@angular/forms';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const httpStub: any = {
    get: () => of({}),
    post: () => of({}),
    put: () => of({}),
    delete: () => of({}),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, InputFindByCityComponent],
      providers: [{
        provide: HttpClient,
        useValue: httpStub
      }],
      imports:[
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not contain text "Register Not Found" before first request', () => {
    const alertNotFound = fixture.nativeElement.querySelector('#alertNotFound');

    if (alertNotFound) {
      expect(alertNotFound.textContent).not.toContain('Register Not Found');
    } else {
      expect(true).toBe(true);
    }
  });

});
