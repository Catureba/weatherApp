import { Component } from '@angular/core';
import { MeteorologicalEntityDTO } from 'src/app/model/meteorological/meteorologicalDTO.model';
import { HttpWeatherAPIService } from 'src/app/services/http-weather-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private service: HttpWeatherAPIService) { }

  // formData: MeteorologicalEntityDTO = {
  //   city: '',
  //   date: '',
  //   max_temperature: 0,
  //   min_temperature: 0,
  //   precipitation: 0,
  //   humidity: 0,
  //   wind_speed: 0,
  //   weather_day: '',
  //   weather_night: '',
  // }

  formData: {
    city: string,
    date: string,
    weather_day: string,
    weather_night: string,
    max_temperature: number,
    min_temperature: number,
    precipitation: number,
    humidity: number,
    wind_speed: number
  } = {
      city: '',
      date: '',
      weather_day: 'Rainy',
      weather_night: 'Sunny',
      max_temperature: 0,
      min_temperature: 0,
      precipitation: 0,
      humidity: 0,
      wind_speed: 0
    };

  onSubmit() {
    this.formData.date += 'T13:32:37.592Z' 
    this.service.PostRegister(this.formData).subscribe({
      next:(data) =>{
        alert("Your register work!")
        
      },
      error:(error) => {
        alert(error)
        console.log(error)
      },
    })
    console.table(this.formData);
    
  }

  

}
