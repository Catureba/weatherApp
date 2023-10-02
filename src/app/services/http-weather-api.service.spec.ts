import { TestBed } from '@angular/core/testing';

import { HttpWeatherAPIService } from './http-weather-api.service';

describe('HttpWeatherAPIService', () => {
  let service: HttpWeatherAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpWeatherAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
