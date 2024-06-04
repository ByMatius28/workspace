import { Component, OnInit } from '@angular/core';
import { PokemonsComponent } from '../../pokemons/pokemons.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports:[PokemonsComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
