import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Injectable, Input} from '@angular/core';
import {Pokemon} from '../models/pokemon/pokemon';
import {Trainer} from '../models/trainer/trainer';
import { Bot } from '../models/trainer/bot';
import { map } from 'rxjs/operators'
import { ApiPokemon } from '../models/pokemon/APIPokemon';
import { Move } from '../models/move/move';


@Injectable()
export class GameService{
  
  private apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  trainer: Trainer;
  bot: Bot = new Bot();

  constructor(private http: HttpClient)
  {
  }

  public getPokemon(id:number): Observable<Pokemon> {
    
    return this.http.get<any>(this.apiUrl + id).pipe(map((data: ApiPokemon): Pokemon => {
      
      let moves: Move[];
      for (let i = 0; i < 4; i++) {
        let name = data.moves[i].move.name;
        data.moves[i].move.url;
      }
      for(let key in data.moves) {

      }

      return {
          name: data.name,
          level: 50,
          speed: data.stats[0].base_stat,
          spDefense: data.stats[1].base_stat,
          spAttack: data.stats[2].base_stat,
          defense: data.stats[3].base_stat,
          attack: data.stats[4].base_stat,
          hp: data.stats[5].base_stat,
          currentHp: data.stats[5].base_stat,
          moves: undefined,
    }
  }))
  }

/*  getPokemonByName(name: number): Observable<Pokemon> {
    return this.http.get<ApiPokemon>(this.apiUrl + name)
      .pipe(map((data: ApiPokemon): Pokemon => {

        return {
          name: data.name,
          level: 50,
          hp: data.stats.filter(x => x.stat.name === 'hp')[0].base_stat,
          currentHp: data.stats.filter(x => x.stat.name === 'hp')[0].base_stat,
          attack: data.stats.filter(x => x.stat.name === 'attack')[0].base_stat,
          spAttack: data.stats.filter(x => x.stat.name === 'special-attack')[0].base_stat,
          defense: data.stats.filter(x => x.stat.name === 'defense')[0].base_stat,
          spDefense: data.stats.filter(x => x.stat.name === 'special-defense')[0].base_stat,
          speed: data.stats.filter(x => x.stat.name === 'speed')[0].base_stat,
        };
      };
*/
  setTrainer(trainer:Trainer) : void
  {
    this.trainer = trainer;
  }

  getTrainer() : Trainer
  {
    return this.trainer;
  }

  getBot() : Bot
  {
    return this.bot;
  }

  setTrainerTeam(pokemons:Pokemon[]) : void 
  {
    this.trainer.setTeam(pokemons);
  }
  
  setBotTeam(pokemons:Pokemon[]) : void 
  {
    this.bot.setTeam(pokemons);
  }
}

