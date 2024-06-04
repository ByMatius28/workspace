import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient){}

  obtenerDatos(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto')
  }
}
