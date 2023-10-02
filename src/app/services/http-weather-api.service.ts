import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeteorologicalEntity } from '../model/meteorological/meteorologicalEntity.model';
import { MeteorologicalEntityDTO } from '../model/meteorological/meteorologicalDTO.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpWeatherAPIService {
  constructor(private http: HttpClient) { }

  GetAll(): Observable<MeteorologicalEntity[]> {
    return this.http.get<MeteorologicalEntity[]>('https://localhost:7091/api/Meteorological/FindAll')
  }

  GetListNextSevenDaysByCity(city:string) {
    return this.http.get('https://localhost:7091/api/Meteorological/listNextSevenDaysByCity/' + city)
  }

  FindById(id: string) {
    return this.http.get('https://localhost:7091/api/Meteorological/getById/' + id)
  }

  GetListByCity(city: string) {
    return this.http.get<MeteorologicalEntity[]>('https://localhost:7091/api/Meteorological/listByCity/' + city)
  }

  GetRegisterTodayByCity(city:string) {
    return this.http.get<MeteorologicalEntity>('https://localhost:7091/api/Meteorological/getRegisterByCityToday/' + city)
  }

  PostRegister(register:MeteorologicalEntityDTO) {
    return this.http.post('https://localhost:7091/api/Meteorological/postRegisterMeteorological', register)

  }

  PutRegister(id:string, registerByEdit:MeteorologicalEntityDTO) {
    return this.http.get('https://localhost:7091/api/Meteorological/editRegisterMeteorologicalById/' + id)
  }

  DeleteById(id: string) {
    return this.http.get('https://localhost:7091/api/Meteorological/deleteRegisterMeteorologicalById/' + id)
  }

}
