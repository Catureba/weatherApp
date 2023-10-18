import { Component } from '@angular/core';
import { find } from 'rxjs';
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
  styleType:string = "style2"
  page:number=0

  ngOnInit():void{
    this.findAll()
  }

  findAll(){
    this.service.GetRegistersWithPagination(undefined,this.page).subscribe({
      next:(data) =>{
        this.registers = data.data
      },
      error:(error) => {
        console.log(error)
      },
    })
  }
  nextPage(){
    this.page++
    this.findAll()
  }
  previous(){
    this.page--
    this.findAll()
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
    this.service.DeleteById(id).subscribe({
      next: (data) => {
        alert("One register was deleted")
      },
      error: (error) => {
        if(error.error.text == "Deleted the Meteorological register!") alert("Deleted the Meteorological register!")
        else alert("error to try delete this register, try again later!")
      },
    });
  }
}
