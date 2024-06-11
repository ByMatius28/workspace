import { PokemonService} from './services/pokemon.service'
import { Component, OnInit } from '@angular/core';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   providers: [PokemonService],
})
export class AppComponent implements OnInit{
  poke: any;
  url = 'https://pokeapi.co/api/v2/pokemon/growlithe/'
  constructor(private srv: PokemonService){}
  getPoke():void{
     this.srv.getData(this.url).subscribe(data=>this.poke=data)
  }
  ngOnInit(){
  this.getPoke()
  }
  }