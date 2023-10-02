import { HttpWeatherAPIService } from './../../services/http-weather-api.service';
import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.getRegisterToday("salvador");
    this.getListRegistersByCity("salvador");
  }

  getListRegistersByCity(city:string) {
    this.serviceWeather.GetListByCity(city).subscribe(data =>{
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
