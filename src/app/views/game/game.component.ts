import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/service/GameService';
import { Pokemon } from 'src/app/models/pokemon/pokemon';
import { Move } from 'src/app/models/move/move';
import { Category } from 'src/app/models/move/Category';
import { Observable, interval, Subscription} from 'rxjs';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  trainerPokemons : Pokemon[] = [];
  botPokemons : Pokemon[] = [];

  currentTrainerPokemon : Pokemon;
  currentBotPokemon : Pokemon;
  counter;
  battlePaused = true;
  btnText = "PLAY";
  subscription : Subscription;

  fightLogs = new Array<String>();

  constructor(private route: ActivatedRoute, private router: Router, private gameService:GameService) {  }

  ngOnInit(): void {
    this.trainerPokemons = this.gameService.getTrainer().getPokemons();
    this.botPokemons = this.gameService.getBot().getPokemons();

    this.currentTrainerPokemon = this.trainerPokemons[0];
    this.currentBotPokemon = this.botPokemons[1];

    this.counter = interval(1000);
  }

  fight() : void
  {
    this.fightLogs.push("The battle between " + this.currentTrainerPokemon.name + " and " + this.currentBotPokemon.name + " starts now !");

    let attacker = this.getFastest();
    let defender : Pokemon;

    if(attacker === this.currentTrainerPokemon)
    {
        defender = this.currentBotPokemon;
    }
    else{
        defender = this.currentTrainerPokemon;
    }

    let randomNumber = Math.floor(Math.random() * 2);
    this.attack(attacker, defender, attacker.moves[randomNumber]);

    if (defender.hp <=0)
    {
        this.fightLogs.push(defender.name + " is KO !")
        this.fightLogs.push(attacker.name + " has won.");
        this.counter.unsubsribe();
    }
    else {

      randomNumber = Math.floor(Math.random() * 2);
      this.attack(defender, attacker, defender.moves[randomNumber]);

      if (attacker.hp <=0)
      {
        this.fightLogs.push(defender.name + " is KO !")
        this.fightLogs.push(attacker.name + " has won.");
      }
      else {

        randomNumber = Math.floor(Math.random() * 2);
        this.attack(defender, attacker, defender.moves[randomNumber]);
  
        if (attacker.currentHp <=0)
        {
          this.fightLogs.push(attacker.name + " is KO !")
          this.fightLogs.push(defender.name + " has won !");
        }
          this.counter.unsubsribe();
          this.router.navigate(['teamBuilder']);
      }
    }
  }

  getFastest(): Pokemon{
    if(this.currentTrainerPokemon.speed === this.currentBotPokemon.speed){
        return (Math.floor(Math.random() *2)) === 0 ? this.currentTrainerPokemon: this.currentBotPokemon;
    } else {
        return (this.currentTrainerPokemon.speed > this.currentBotPokemon.speed) ? this.currentTrainerPokemon : this.currentBotPokemon;
    }
  }

  attack(attacker:Pokemon, defender:Pokemon, move:Move): void
  {
      let damage = this.calculateDamage(attacker, defender, move);
      this.fightLogs.push(attacker.name + " attacks with " + move.name + " and deals " + damage + " damages to " + defender.name  );
      defender.currentHp = defender.currentHp - damage;

      if(defender.hp < 0)
      {
        defender.hp = 0;
      }

      this.fightLogs.push(defender.name + " has now " + defender.name + " hp left");
  }

  calculateDamage(attacker: Pokemon, defender: Pokemon, move: Move): number {

    let atk: number;
    let def: number;

    if(move.category == Category.Physic)
    {
        atk = attacker.attack;
        def = defender.defense;
    }
    else
    {
        atk = attacker.spAttack;
        def = defender.spDefense;
    }
    return Math.floor(Math.floor(Math.floor((2 * attacker.level) / (5 + 2)) * atk * move.power / def) / 50) + 2;
  }


  triggerPauseButton() : void {
    if(this.battlePaused)
      this.play();
    else
      this.pause();
  }

  pause() : void {
    this.fightLogs.push("battle paused")
    this.subscription.unsubscribe();
    this.btnText = "PLAY";
    this.battlePaused = true;
  }

  play() : void {
    this.fightLogs.push("battle unpaused")
    this.btnText = "PAUSE";
    this.battlePaused = false;
    this.subscription = this.counter.subscribe(Data => { 
      this.fight();
    });
  }
}
