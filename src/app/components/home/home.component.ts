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
  registers: MeteorologicalEntity[] = [  ] ;
  registerToday: MeteorologicalEntity = new MeteorologicalEntity;
  city: string = ""
  errorWasThrown: string[] = []
  date:Date = new Date()
  styleType:string = "style1"

  ngOnInit(): void {

  }

  outPutCity(event:any){
    this.city = event
    this.findNewCity(event)
  }

  findNewCity(city:string){
    this.getListWithRegistersNextSevenDaysByCity(city)
    this.getRegisterToday(city)
  }

  replaceDateCompletToSimpleDate(date:string){
    date = date.substring(0,10)
    date = date.replace(/-/g,"/")
    return date
  }

  getListWithRegistersNextSevenDaysByCity(city:string) {
    this.serviceWeather.GetListNextSevenDaysByCity(city).subscribe({

      next:(data) => {
        this.registers = data
      },

      error:(error) =>{
        console.log(error);
      }
    })
  }

  getRegisterToday(city:string){
    this.serviceWeather.GetRegisterTodayByCity(city).subscribe({

      next:(data) => {
        this.registerToday = data;
      },

      error:(error) => {
        console.log(error);
      },

    })
  }

}
