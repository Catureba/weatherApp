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
  styleType: string = 'style2';
  page: number = 0;
  totalPages: number = 0;
  currentPage: number = 0;
  totalRegisters?: number;

  ngOnInit(): void {
    this.findAll();
  }

  nextPage() {
    if(this.currentPage < this.totalPages){
      this.page++;
      this.findByCity(this.registers[0].city);
    }

  }
  previousPage() {
    if(this.currentPage > 1){
      this.page--;
      this.findByCity(this.registers[0].city);
    }
  }
  newSearch(city: any) {
    this.city = city;
    this.findByCity(city);
  }

  findAll() {
    this.service.GetRegistersWithPagination(undefined, this.page).subscribe({
      next: (data) => {
        this.registers = data.data;
        this.totalPages = data.totalPages;
        this.totalRegisters = data.totalRegisters;
        this.currentPage = data.currentPage + 1;
      },
      error: (error) => {
        console.log(error);
        alert(error.error)
      },
    });
  }

  findByCity(city: string) {
    this.service.GetRegistersWithPagination(city, this.page).subscribe({
      next: (data) => {
        this.registers = data.data;
        this.totalPages = data.totalPages;
        this.totalRegisters = data.totalRegisters;
        this.currentPage = data.currentPage + 1;
        console.table(data)
      },
      error: (error) => {
        console.log(error);
        alert(error.error)
      },
    });
  }

  replaceDateCompletToSimpleDate(date: string) {
    date = date.substring(0, 10);
    date = date.replace(/-/g, '/');
    return date;
  }
  deleteByID(id: string) {
    this.service.DeleteById(id).subscribe({
      next: (data) => {
        alert('One register was deleted');
      },
      error: (error) => {
        if (error.error.text == 'Deleted the Meteorological register!')
          alert('Deleted the Meteorological register!');
        else alert('error to try delete this register, try again later!');
      },
    });
  }
}
