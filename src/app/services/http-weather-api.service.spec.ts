import { TestBed } from '@angular/core/testing';
import { HttpWeatherAPIService } from './http-weather-api.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { MeteorologicalEntity } from '../model/meteorological/meteorologicalEntity.model';
import { MeteorologicalEntityDTO } from '../model/meteorological/meteorologicalDTO.model';
import { Pagination } from '../model/pagination/pagination.model';

fdescribe('HttpWeatherAPIService', () => {
  let service: HttpWeatherAPIService;
  let httpClient: HttpClient;

  const httpStub: any = {
    get: () => of({}),
    post: () => of({}),
    put: () => of({}),
    delete: () => of({}),
  };

  const dataPagination = {
    "totalRegisters": 10,
    "totalPages": 2,
    "currentPage": 0,
    "data": [
        {
            "id": "df46b29c-2cbe-459c-8227-5d2f3d123004",
            "city": "salvador",
            "date": "2023-10-19T13:32:37.592Z",
            "max_temperature": 11,
            "min_temperature": 22,
            "weather_day": "Rainy",
            "weather_night": "Sunny",
            "precipitation": 33,
            "humidity": 44,
            "wind_speed": 55
        },
        {
            "id": "b5c83b4f-ce4c-4cbd-a412-cd5b59761013",
            "city": "salvador",
            "date": "2023-10-20T13:32:37.592Z",
            "max_temperature": 11,
            "min_temperature": 22,
            "weather_day": "Rainy",
            "weather_night": "Sunny",
            "precipitation": 33,
            "humidity": 44,
            "wind_speed": 55
        },
        {
            "id": "6e3e4b21-7f6f-4081-9ff8-758b1cf5ebd3",
            "city": "salvador",
            "date": "2023-10-21T13:32:37.592Z",
            "max_temperature": 12,
            "min_temperature": 34,
            "weather_day": "Rainy",
            "weather_night": "Sunny",
            "precipitation": 56,
            "humidity": 78,
            "wind_speed": 91
        },
        {
            "id": "6efaee1f-6daf-42c7-a339-86450fb39d98",
            "city": "salvador",
            "date": "2023-10-22T13:32:37.592Z",
            "max_temperature": 12,
            "min_temperature": 34,
            "weather_day": "Rainy",
            "weather_night": "Sunny",
            "precipitation": 56,
            "humidity": 78,
            "wind_speed": 91
        },
        {
            "id": "6db967e0-4495-4f18-b31c-113ce589077a",
            "city": "salvador",
            "date": "2023-10-23T13:32:37.592Z",
            "max_temperature": 12,
            "min_temperature": 34,
            "weather_day": "Rainy",
            "weather_night": "Sunny",
            "precipitation": 56,
            "humidity": 78,
            "wind_speed": 91
        }
    ]
}
const meteorologicalList: MeteorologicalEntity[] = [
  {
    "id": "241528a0-6cfb-4eff-bdb0-3237a5ca82be",
    "city": "madre de deus",
    "date": "2023-10-20T15:23:11.866Z",
    "max_temperature": 23,
    "min_temperature": 40,
    "weather_day": "Sunny",
    "weather_night": "Overcast",
    "precipitation": 11,
    "humidity": 22,
    "wind_speed": 33
},
{
  "id": "123456a0-1234-4eff-bdb0-3237a5ca82be",
  "city": "madre de deus",
  "date": "2023-10-20T15:23:11.866Z",
  "max_temperature": 23,
  "min_temperature": 40,
  "weather_day": "Sunny",
  "weather_night": "Overcast",
  "precipitation": 11,
  "humidity": 22,
  "wind_speed": 33
}
]
const meteorologicalRegister:MeteorologicalEntity = {
  "id": "241528a0-6cfb-4eff-bdb0-3237a5ca82be",
  "city": "Salvador",
  "date": "2023-10-20T15:23:11.866Z",
  "max_temperature": 23,
  "min_temperature": 40,
  "weather_day": "Sunny",
  "weather_night": "Overcast",
  "precipitation": 11,
  "humidity": 22,
  "wind_speed": 33
}
const meteorologicalDTO:MeteorologicalEntityDTO = {
  "city": "Porto Alegre",
  "date": "2023-10-20T15:23:11.866Z",
  "max_temperature": 23,
  "min_temperature": 40,
  "weather_day": "Sunny",
  "weather_night": "Overcast",
  "precipitation": 11,
  "humidity": 22,
  "wind_speed": 33
}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpWeatherAPIService,
        { provide: HttpClient, useValue: httpStub },
      ],
    });
    service = TestBed.inject(HttpWeatherAPIService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call GetAll() and return data', () => {
    const expectedData: MeteorologicalEntity[] = meteorologicalList
    spyOn(httpClient, 'get').and.returnValue(of(expectedData));

    service.GetAll().subscribe((data) => {
      expect(data).toEqual(expectedData);
    });
  });

  it('should call GetRegistersWithPagination() and return data', () => {
    const expectedData: Pagination = dataPagination
    const city = 'exampleCity';
    const skip = 0;
    spyOn(httpClient, 'get').and.returnValue(of(expectedData));

    service.GetRegistersWithPagination(city, skip).subscribe((data) => {
      expect(data).toEqual(expectedData);
    });
  });
  //

  it('should call GetListNextSevenDaysByCity() and return data', () => {
    const expectedData: MeteorologicalEntity[] = meteorologicalList
    const city = 'exampleCity';
    spyOn(httpClient, 'get').and.returnValue(of(expectedData));

    service.GetListNextSevenDaysByCity(city).subscribe((data) => {
      expect(data).toEqual(expectedData);
    });
  });

  it('should call FindById() and return data', () => {
    const expectedData: MeteorologicalEntity = meteorologicalRegister
    const id = 'exampleId';
    spyOn(httpClient, 'get').and.returnValue(of(expectedData));

    service.FindById(id).subscribe((data) => {
      expect(data).toEqual(expectedData);
    });
  });

  it('should call GetListByCity() and return data', () => {
    const expectedData: MeteorologicalEntity[] = meteorologicalList
    const city = 'exampleCity';
    spyOn(httpClient, 'get').and.returnValue(of(expectedData));

    service.GetListByCity(city).subscribe((data) => {
      expect(data).toEqual(expectedData);
    });
  });

  it('should call GetRegisterTodayByCity() and return data', () => {
    const expectedData: MeteorologicalEntity = meteorologicalRegister
    const city = 'exampleCity';
    spyOn(httpClient, 'get').and.returnValue(of(expectedData));

    service.GetRegisterTodayByCity(city).subscribe((data) => {
      expect(data).toEqual(expectedData);
    });
  });

  it('should call PostRegister() and return data', () => {
    const expectedData: MeteorologicalEntity = meteorologicalRegister
    const register: MeteorologicalEntityDTO = meteorologicalDTO
    spyOn(httpClient, 'post').and.returnValue(of(expectedData));

    service.PostRegister(register).subscribe((data) => {
      expect(data).toEqual(expectedData);
    });
  });

  it('should call PutRegister() and return data', () => {
    const expectedData: MeteorologicalEntity = meteorologicalRegister
    const id = 'exampleId';
    const registerByEdit: MeteorologicalEntityDTO = meteorologicalDTO
    spyOn(httpClient, 'put').and.returnValue(of(expectedData));

    service.PutRegister(id, registerByEdit).subscribe((data) => {
      expect(data).toEqual(expectedData);
    });
  });

  it('should call DeleteById() and return data', () => {
    const expectedData: string = 'Deleted the Meteorological register!';
    const id = 'exampleId';
    spyOn(httpClient, 'delete').and.returnValue(of(expectedData));

    service.DeleteById(id).subscribe((data) => {
      expect(data).toEqual(expectedData);
    });
  });


});
