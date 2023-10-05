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

  ngOnInit(): void {

  }

  findNewCity(city: string){
    this.getRegisterToday(city);
    this.getListWithRegistersNextSevenDaysByCity(city);
    //this.validErrors(this.errorWasThrown);
  }
  validErrors(errorWasThrown: string[]) {
    if (this.errorWasThrown.length > 0) {
      alert(this.errorWasThrown);
      this.errorWasThrown = [];
    }
  }

  getListWithRegistersNextSevenDaysByCity(city:string) {
    this.serviceWeather.GetListNextSevenDaysByCity(city).subscribe({

      next:(data) => {
        data.map((element => {
          element.date = this.replaceDateCompletToSimpleDate(element.date)
        }))
        this.registers = data;
      },

      error:(error) =>{
        this.errorWasThrown.push("Not Found Registers on next seven days to"+city+"\n");
      }
    })
  }

  getRegisterToday(city:string){
    this.serviceWeather.GetRegisterTodayByCity(city).subscribe({

      next:(data) => {
        data.date = this.replaceDateCompletToSimpleDate(data.date)
        this.registerToday = data;
      },

      error:(error) => {
        this.errorWasThrown.push("Not found today register by"+city+"\n");
      },

    })
  }

  replaceDateCompletToSimpleDate(date:string){
    date = date.substring(0,10)
    date = date.replace(/-/g,"/")
    return date
  }

}
