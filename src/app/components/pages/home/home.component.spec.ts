import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { InputFindByCityComponent } from '../../shared/input-find-by-city/input-find-by-city.component';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
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

  it('should not contain text "Register Not Found"', () => {
    const alertNotFound = fixture.nativeElement.querySelector('#alertNotFound');

    if (alertNotFound) {
      // Se o elemento com o ID "alertNotFound" existe, verifique se ele não contém o texto "Register Not Found"
      expect(alertNotFound.textContent).not.toContain('Register Not Found');
    } else {
      // Se o elemento não existe, considere o teste bem-sucedido
      expect(true).toBe(true);
    }
  });

});
