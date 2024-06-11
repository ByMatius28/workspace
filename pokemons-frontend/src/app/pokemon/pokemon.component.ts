import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-data-view',
  templateUrl: 'welcome/welcome.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {
  datos: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.pokemonService.getData().subscribe(
      (data) => {
        this.datos = data;
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}