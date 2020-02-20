import {Injectable, Input} from '@angular/core';
import {Pokemon} from '../models/pokemon/pokemon';
import {Trainer} from '../models/trainer/trainer';
import {Move} from '../models/move/move';
import { Category} from '../models/move/Category'

@Injectable()
export class GameService{
  
  trainer: Trainer;
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
}

