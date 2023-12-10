import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  pokemon: PokemonData | any
  attributesTypes: string[] = ['Fire', 'Rock']

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.service.getPokemon('ditto').subscribe({
      next: (res) => {

        this.pokemon = {
          id:  res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }

        console.log(this.pokemon)
      },
      error: (err) => console.log(err)
    })

  }
}
