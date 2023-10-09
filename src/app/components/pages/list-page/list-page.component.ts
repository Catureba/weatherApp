import { Component } from '@angular/core';
import { MeteorologicalEntity } from 'src/app/model/meteorological/meteorologicalEntity.model';
import { HttpWeatherAPIService } from 'src/app/services/http-weather-api.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent {
  constructor(private service: HttpWeatherAPIService) {}
  city: string = '';
  registers: MeteorologicalEntity[] = [];

  ngOnInit():void{
    this.findAll()
  }

  findAll(){
    this.service.GetAll().subscribe({
      next:(data) =>{
        this.registers = data
      },
      error:(error) => {
        console.log(error)
      },
    })
  }

  newSearch(city: any) {
    this.city = city;
    this.findByCity(city);
  }

  findByCity(city: string) {
    this.service.GetListByCity(city).subscribe({
      next: (data) => {
        this.registers = data;
      },
      error: (error) => {
        console.log(error);
      },
    });

  }

  replaceDateCompletToSimpleDate(date: string) {
    date = date.substring(0, 10);
    date = date.replace(/-/g, '/');
    return date;
  }
  deleteByID(id:string){
    this.service.DeleteById(id)
    console.log(id);

  }
}
