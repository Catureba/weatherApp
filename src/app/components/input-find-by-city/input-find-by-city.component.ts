import { Component, EventEmitter, Output } from '@angular/core';
import { MeteorologicalEntity } from 'src/app/model/meteorological/meteorologicalEntity.model';
import { HttpWeatherAPIService } from 'src/app/services/http-weather-api.service';

@Component({
  selector: 'app-input-find-by-city',
  templateUrl: './input-find-by-city.component.html',
  styleUrls: ['./input-find-by-city.component.css']
})
export class InputFindByCityComponent {
  city: string = ""
  @Output() outPutCity = new EventEmitter<string>();

  newSearch(city:string){
    this.outPutCity.emit(city);
  }
}
