import { HttpWeatherAPIService } from './../../services/http-weather-api.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeteorologicalEntity } from 'src/app/model/meteorological/meteorologicalEntity.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private serviceWeather: HttpWeatherAPIService) { }
  registers!: MeteorologicalEntity[];
  registerToday!: MeteorologicalEntity;
  date:Date = new Date()
  city: string = "candeias"

  ngOnInit(): void {
    this.getRegisterToday("Salvador");
    this.getListWithRegistersNextSevenDaysByCity("Salvador");
  }

  findNewCity(city: string){
    this.getRegisterToday(city);
    this.getListWithRegistersNextSevenDaysByCity(city);
  }

  getListWithRegistersNextSevenDaysByCity(city:string) {
    this.serviceWeather.GetListNextSevenDaysByCity(city).subscribe(data =>{
      data.map((element => {
        element.date = this.replaceDateCompletToSimpleDate(element.date)
      }))
      this.registers = data!;
    })
  }

  getRegisterToday(city:string){
    this.serviceWeather.GetRegisterTodayByCity(city).subscribe(data =>{
      data.date = this.replaceDateCompletToSimpleDate(data.date)
      this.registerToday = data!;
    })
  }

  replaceDateCompletToSimpleDate(date:string){
    date = date.substring(0,10)
    date = date.replace(/-/g,"/")
    return date
  }

}
