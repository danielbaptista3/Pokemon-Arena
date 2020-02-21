import {Injectable, Input} from '@angular/core';
import {Pokemon} from '../models/pokemon/pokemon';
import {Trainer} from '../models/trainer/trainer';
import {Move} from '../models/move/move';
import { Category} from '../models/move/Category'
import { Bot } from '../models/trainer/bot';

@Injectable()
export class GameService{
  
  trainer: Trainer;
  bot: Bot = new Bot();

  constructor()
  {
  }

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

