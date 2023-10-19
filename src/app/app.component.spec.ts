import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

describe('AppComponent', () => {
  const activatedRouteMock = {
    snapshot: {
      paramMap: new Map([['id', '123']]), // Substitua com os parâmetros de rota que você deseja simular
    },
  };

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent, FooterComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
