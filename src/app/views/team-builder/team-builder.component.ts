import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/service/GameService';
import { Trainer } from 'src/app/models/trainer/trainer';
import { Pokemon } from 'src/app/models/pokemon/pokemon';
import { Move } from 'src/app/models/move/move';
import { Category } from 'src/app/models/move/Category';

@Component({
  selector: 'teamBuilder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.css'],
})
export class TeamBuilderComponent implements OnInit {
 
  pokemons: Pokemon[];

  constructor(private gameService:GameService) {
   }
  
  ngOnInit(): void {
    let movesPokemon1 = [new Move("Bite", 60, Category.Physic, 1), new Move("Water Gun", 40, Category.Special, 1)];
    let pokemon1 = new Pokemon("Wartortle", 18, 39, 20, 45, 25, 545, 15, movesPokemon1);

    let movesPokemon2 = [new Move("Ember", 40, Category.Special, 1), new Move("Dragon Breath", 60, Category.Special, 1)];
    let pokemon2 = new Pokemon("Charmeleon", 20, 42, 22, 59, 27, 12, 67, movesPokemon2);

  }

  getTrainer() : Trainer
  {
    return this.gameService.getTrainer();
  }
}
