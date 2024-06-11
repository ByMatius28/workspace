import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  datos: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.apiService.getData().subscribe(
      (data) => {
        this.datos = data;
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

}