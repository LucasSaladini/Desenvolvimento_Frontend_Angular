import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  name: string = "Bulbassaur"
  attributesTypes: string[] = ['Fire', 'Rock']

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.service.getPokemon('bulbassaur')

  }
}
