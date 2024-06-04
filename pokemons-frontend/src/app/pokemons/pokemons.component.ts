import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css',
})

export class PokemonsComponent  implements OnInit{

  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.pokemonService.obtenerDatos()
    .subscribe(datos => {console.log(datos)})
  }
}
