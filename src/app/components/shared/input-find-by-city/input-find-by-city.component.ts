import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MeteorologicalEntity } from 'src/app/model/meteorological/meteorologicalEntity.model';
import { HttpWeatherAPIService } from 'src/app/services/http-weather-api.service';

@Component({
  selector: 'app-input-find-by-city',
  templateUrl: './input-find-by-city.component.html',
  styleUrls: ['./input-find-by-city.component.css']
})
export class InputFindByCityComponent {

  city: string = ""
  @Input() styleType:string = "";
  @Output() outPutCity = new EventEmitter<string>();
  title:string="City"

  ngOnInit():void{
    this.stylesAdjusts(this.styleType)
  }

  stylesAdjusts(styleType:string):void{
    if(styleType == "style1"){
      this.title = "Search by city"
    }
    else{
      this.styleType = "style2"
    }

  }

  newSearch(city:string){
    this.outPutCity.emit(city);
  }

}
