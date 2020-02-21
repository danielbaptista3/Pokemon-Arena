import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/service/GameService';
import { Pokemon } from 'src/app/models/pokemon/pokemon';
import { Move } from 'src/app/models/move/move';
import { Category } from 'src/app/models/move/Category';

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

  constructor(private route: ActivatedRoute, private router: Router, private gameService:GameService) {  }

  ngOnInit(): void {
    this.trainerPokemons = this.gameService.getTrainer().getPokemons();
    this.botPokemons = this.gameService.getBot().getPokemons();

    this.currentTrainerPokemon = this.trainerPokemons[0];
    this.currentBotPokemon = this.botPokemons[0];



    this.fight();
  }

  fight() : void
  {
    console.log("The battle between " + this.currentTrainerPokemon.name + " and " + this.currentBotPokemon.name + " starts now !");

    let idInterval = setInterval(() => {

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

      if (defender.currentHp <=0)
      {
          console.log(defender.name + " is KO !")
          console.log(attacker.name + " has won.");
          clearInterval(idInterval);
          //this.router.navigate(['teamBuilder']);
      }
      else {

        randomNumber = Math.floor(Math.random() * 2);
        this.attack(defender, attacker, defender.moves[randomNumber]);
  
        if (attacker.currentHp <=0)
        {
            console.log(attacker.name + " is KO !")
            console.log(defender.name + " has won !");
            clearInterval(idInterval);
            //this.router.navigate(['teamBuilder']);
        }
      }
    }, 2000);



  }

  getFastest(): Pokemon{
    if(this.currentTrainerPokemon.speed === this.currentBotPokemon.speed){
        return (Math.floor(Math.random() *2)) === 0 ? this.currentTrainerPokemon: this.currentBotPokemon;
    } else {
        return (this.currentTrainerPokemon.speed > this.currentBotPokemon.speed) ? this.currentTrainerPokemon : this.currentBotPokemon;
    }
  }

  attack(attacker: Pokemon, defender: Pokemon, move:Move): void 
  {
      let damage = this.calculateDamage(attacker, defender, move);
      console.log(attacker.name + " attacks with " + move.name + " and deals " + damage + " damages to " + defender.name  );
      defender.currentHp = defender.currentHp - damage;

      if(defender.currentHp < 0)
      {
        defender.currentHp = 0;
      }

      console.log(defender.name + " has now " + defender.name + " hp left");
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
}
