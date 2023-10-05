import { Component, EventEmitter, Output } from '@angular/core';
import { MeteorologicalEntity } from 'src/app/model/meteorological/meteorologicalEntity.model';
import { HttpWeatherAPIService } from 'src/app/services/http-weather-api.service';

@Component({
  selector: 'app-input-find-by-city',
  templateUrl: './input-find-by-city.component.html',
  styleUrls: ['./input-find-by-city.component.css']
})
export class InputFindByCityComponent {

  constructor(private serviceWeather: HttpWeatherAPIService) { }
  registers: MeteorologicalEntity[] = [  ] ;
  registerToday: MeteorologicalEntity = new MeteorologicalEntity;
  city: string = ""

  @Output() outputRegisterToday = new EventEmitter<MeteorologicalEntity>();
  @Output() outputRegisters = new EventEmitter<MeteorologicalEntity[]>();



  ngOnInit(): void {

  }

  findNewCity(city: string){
    this.getRegisterToday(city);
    this.getListWithRegistersNextSevenDaysByCity(city);
  }

  getListWithRegistersNextSevenDaysByCity(city:string) {
    this.serviceWeather.GetListNextSevenDaysByCity(city).subscribe({

      next:(data) => {
        this.outputRegisters.emit(data);
      },

      error:(error) =>{
        console.log(error);
      }
    })
  }

  getRegisterToday(city:string){
    this.serviceWeather.GetRegisterTodayByCity(city).subscribe({

      next:(data) => {
        this.outputRegisterToday.emit(data);
      },

      error:(error) => {
        console.log(error);
      },

    })
  }
}
