import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { AppModule } from '../../app.module';
import { PokemonComponent } from '../../pokemon/pokemon.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PokemonService],
  imports: [AppModule,PokemonComponent]
})
export class WelcomeComponent implements OnInit {

  pokemonNameOrId: string = '';
  pokemonData: any;
  errorMessage: string | null = null;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() { }

  generatePokemon() {
    this.pokemonService.getPokemon(this.pokemonNameOrId).subscribe({
      next: data => {
        this.pokemonData = data;
        this.errorMessage = null;
      },
      error: err => {
        this.pokemonData = null;
        this.errorMessage = 'Pokémon not found';
      }
    });
  }
}
