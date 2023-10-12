import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  GetListNextSevenDaysByCity(city:string): Observable<MeteorologicalEntity[]> {
    return this.http.get<MeteorologicalEntity[]>('https://localhost:7091/api/Meteorological/listNextSevenDaysByCity/' + city)
  }

  FindById(id: string): Observable<MeteorologicalEntity> {
    return this.http.get<MeteorologicalEntity>('https://localhost:7091/api/Meteorological/getById/' + id)
  }

  GetListByCity(city: string): Observable<MeteorologicalEntity[]> {
    return this.http.get<MeteorologicalEntity[]>('https://localhost:7091/api/Meteorological/listByCity/' + city)
  }

  GetRegisterTodayByCity(city:string): Observable<MeteorologicalEntity> {
    return this.http.get<MeteorologicalEntity>('https://localhost:7091/api/Meteorological/getRegisterByCityToday/' + city)
  }

  PostRegister(register:MeteorologicalEntityDTO): Observable<MeteorologicalEntity> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<MeteorologicalEntity>('https://localhost:7091/api/Meteorological/postRegisterMeteorological', register, { headers })
  }

  PutRegister(id:string, registerByEdit:MeteorologicalEntityDTO): Observable<MeteorologicalEntity> {
    return this.http.get<MeteorologicalEntity>('https://localhost:7091/api/Meteorological/editRegisterMeteorologicalById/' + id)
  }

  DeleteById(id: string) {
    return this.http.get<String>('https://localhost:7091/api/Meteorological/deleteRegisterMeteorologicalById/' + id)
  }

}
