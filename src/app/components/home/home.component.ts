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

  outputRegisterToday(event:any){
    this.registerToday = event
  }
  outputRegisters(event:any){
    this.registers = event
  }

  replaceDateCompletToSimpleDate(date:string){
    date = date.substring(0,10)
    date = date.replace(/-/g,"/")
    return date
  }

}
