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

    this.loadDatas();
  }

  getTrainer() : Trainer
  {
    return this.gameService.getTrainer();
  }

    toBattle(pokemons:Pokemon[]) : void
  {
    let audio = new Audio();
    audio.src = "../../assets/audios/click.mp3";
    audio.load();
    audio.play();

    this.gameService.setTrainerTeam(this.pokemons);
    this.gameService.setBotTeam(this.pokemons);
    setTimeout(() => this.navigate(), 2000);
  }

  navigate() : void
  {
    this.router.navigate(['game']);
  }

  getPokemon(id:number) : any
  {
    let pokemon;
    fetch("http://pokeapi.co/api/v2/pokemon/" + id + "/")
      .then(res => res.json())
      .then(data => {
        pokemon = new Pokemon(data);
        console.log(pokemon);

        for (let i=0; i<4; i++){
          fetch(data.moves[i].move.url)
            .then(res => res.json())
            .then(data => {
              pokemon.addMove(new Move(data));
            });
        }


        return pokemon;
      })
      .catch(err => console.log(err));
  }

  loadDatas()
  {
    this.pokemons.push(this.getPokemon(5));
  }

}
