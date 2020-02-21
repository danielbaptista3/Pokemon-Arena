import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/service/GameService';
import { Trainer } from 'src/app/models/trainer/trainer';
import { Pokemon } from 'src/app/models/pokemon/pokemon';
import { Move } from 'src/app/models/move/move';
import { Category } from 'src/app/models/move/Category';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiPokemon } from 'src/app/models/pokemon/APIPokemon';

@Component({
  selector: 'teamBuilder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.css'],
})
export class TeamBuilderComponent implements OnInit {

  pokemons: Pokemon[] = [];

  pokemon: any;

  constructor(private route: ActivatedRoute, private router: Router, private gameService:GameService) {
   }

  ngOnInit(): void {
    if(this.gameService.getTrainer() == undefined)
    {
      this.router.navigate(['']);
    }

    this.gameService.getPokemon(5).subscribe(pokemon => {this.pokemons.push(pokemon)});
    let test = "";
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
    for (let i=1; i<10; i++)
    {
      this.pokemons.push(this.getPokemon(i));
    }
    //PIKACHU
    this.pokemons.push(this.getPokemon(25));
  }


  randomizePokemon() : Pokemon
  {
    return this.pokemons[Math.floor(Math.random() * 2)];
  }
}
