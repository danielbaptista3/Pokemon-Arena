import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/service/GameService';
import { Trainer } from 'src/app/models/trainer/trainer';
import { Pokemon } from 'src/app/models/pokemon/pokemon';
import { Move } from 'src/app/models/move/move';
import { Category } from 'src/app/models/move/Category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'teamBuilder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.css'],
})
export class TeamBuilderComponent implements OnInit {
 
  pokemons: Pokemon[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private gameService:GameService) {
   }
  
  ngOnInit(): void {
    if(this.gameService.getTrainer() == undefined)
    {
      this.router.navigate(['']);
    }

    let movesPokemon1 = [new Move("Bite", 60, Category.Physic, 1), new Move("Water Gun", 40, Category.Special, 1)];
    let pokemon1 = new Pokemon("Wartortle", 18, 39, 20, 45, 25, 545, 15, movesPokemon1);

    let movesPokemon2 = [new Move("Ember", 40, Category.Special, 1), new Move("Dragon Breath", 60, Category.Special, 1)];
    let pokemon2 = new Pokemon("Charmeleon", 20, 42, 22, 59, 27, 12, 67, movesPokemon2);

    let pokemon3 = new Pokemon("Charmeleon", 20, 42, 22, 59, 27, 12, 67, movesPokemon2);
    let pokemon4 = new Pokemon("Charmeleon", 20, 42, 22, 59, 27, 12, 67, movesPokemon2);
    let pokemon5 = new Pokemon("Charmeleon", 20, 42, 22, 59, 27, 12, 67, movesPokemon2);
    let pokemon6 = new Pokemon("Charmeleon", 20, 42, 22, 59, 27, 12, 67, movesPokemon2);
    let pokemon7 = new Pokemon("Charmeleon", 20, 42, 22, 59, 27, 12, 67, movesPokemon2);

    this.pokemons.push(pokemon1);
    this.pokemons.push(pokemon2);
    this.pokemons.push(pokemon3);
    this.pokemons.push(pokemon4);
    this.pokemons.push(pokemon5);
    this.pokemons.push(pokemon6);
    this.pokemons.push(pokemon7);
  }

  getTrainer() : Trainer
  {
    return this.gameService.getTrainer();
  }

    toBattle(pokemon:Pokemon) : void
  {
    let audio = new Audio();
    audio.src = "../../assets/audios/click.mp3";
    audio.load();
    audio.play();

    this.gameService.setTrainerTeam([pokemon]);
    this.gameService.setBotTeam([this.randomizePokemon()]);
    setTimeout(() => this.navigate(), 2000);
  }

  navigate() : void
  {
    this.router.navigate(['game']);
  }

  randomizePokemon() : Pokemon
  {
    return this.pokemons[Math.floor(Math.random() * 2)];
  }
}
