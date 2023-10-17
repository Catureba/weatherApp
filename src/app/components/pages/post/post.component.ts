import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MeteorologicalEntityDTO } from 'src/app/model/meteorological/meteorologicalDTO.model';
import { HttpWeatherAPIService } from 'src/app/services/http-weather-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
//  constructor(private service: HttpWeatherAPIService) { }

myForm: FormGroup; // Crie uma propriedade para o seu formulário

  formData = {
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

  constructor(private fb: FormBuilder, private service: HttpWeatherAPIService) {
    // Use o FormBuilder para criar o formulário com base no objeto formData
    this.myForm = this.fb.group({
      city: this.formData.city,
      date: this.formData.date,
      weather_day: this.formData.weather_day,
      weather_night: this.formData.weather_night,
      max_temperature: this.formData.max_temperature,
      min_temperature: this.formData.min_temperature,
      precipitation: this.formData.precipitation,
      humidity: this.formData.humidity,
      wind_speed: this.formData.wind_speed
    });
  }

  onSubmit() {
    this.formData.date += 'T13:32:37.592Z'
    this.service.PostRegister(this.formData).subscribe({
      next:(data) =>{
        alert("Your register work!")

      },
      error:(error) => {
        console.log(error)
      },
    })
    console.table(this.formData);

  }



}
