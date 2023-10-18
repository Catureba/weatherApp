import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpWeatherAPIService } from 'src/app/services/http-weather-api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  myForm: FormGroup;
  id: string = '';

  formData = {
    city: '',
    date: '',
    weather_day: '',
    weather_night: '',
    max_temperature: 0,
    min_temperature: 0,
    precipitation: 0,
    humidity: 0,
    wind_speed: 0,
  };

  constructor(
    private fb: FormBuilder,
    private service: HttpWeatherAPIService,
    private route: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      city: this.formData.city,
      date: this.formData.date,
      weather_day: this.formData.weather_day,
      weather_night: this.formData.weather_night,
      max_temperature: this.formData.max_temperature,
      min_temperature: this.formData.min_temperature,
      precipitation: this.formData.precipitation,
      humidity: this.formData.humidity,
      wind_speed: this.formData.wind_speed,
    });
  }

  ngOnInit() {
    this.route.url.subscribe((urlSegments) => {
      this.id = urlSegments.map((segment) => segment.path).join('/').replace('edit/', '');
      this.injectDataOnForm(this.id)
    });
  }

  injectDataOnForm(id: string) {
    this.service.FindById(id).subscribe({
      next: (data)=>{
        this.formData = data
        this.formData.date = data.date.substring(0, 10);
      }
    })
  }

  onSubmit() {
    console.table(this.formData);
    this.formData.date += 'T13:32:37.592Z';
    this.service.PutRegister(this.id, this.formData).subscribe({
      next: (data) => {
        alert('Your register was updated!');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
