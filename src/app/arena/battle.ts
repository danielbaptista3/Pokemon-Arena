import { Pokemon } from "../model/pokemon/pokemon";
import { Move } from "../model/move/move";
import { Category } from "../model/move/Category"

class Battle {
    
    firstPokemon: Pokemon;
    secondPokemon: Pokemon;
    charmanderMoves = [new Move("Scratch", 40, Category.Physic, 1), new Move("Ember", 40, Category.Special, 1)];
    charmander = new Pokemon("Charmander", 5, 35, 8, 14, 12, 8, 7, this.charmanderMoves);

    squirtleMoves = [new Move("Tackle", 40, Category.Physic, 1), new Move("Water Gun", 40, Category.Special, 1)];
    squirtle = new Pokemon("Squirtle", 5, 38, 7, 12, 11, 10, 9, this.squirtleMoves);


    constructor(firstPokemon: Pokemon, secondPokemon: Pokemon)
    {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }

    fight(): void { 
        let isFinished = false;

        let idInterval = setInterval(() => {
            console.log("The battle between " + this.firstPokemon.name + " and " + this.secondPokemon.name + " starts now !");
            
            let attacker = this.getFastestPokemon();
            let defender;
            if(attacker === this.firstPokemon)
            {
                defender = this.secondPokemon;
            }
            else{
                defender = this.firstPokemon;
            }
            
            let randomNumber = Math.floor(Math.random() * 2);
            this.attack(defender, attacker.move[randomNumber]);

            if (defender.hp <=0)
            {
                console.log(attacker.name + " has won !");
                isFinished = true;
            }

            randomNumber = Math.floor(Math.random() * 2);
            this.attack(attacker, defender.move[randomNumber]);

            if (attacker.hp <=0)
            {
                console.log(attacker.name + " has won !");
                isFinished = true;
            }

            if(isFinished)
            {
                clearInterval(idInterval);
            }
        }, 2000);
    }


    getFastestPokemon(): Pokemon {
        if(this.firstPokemon.speed == this.secondPokemon.speed)
        {
            return Math.floor(Math.random() * 2) == 0 ? this.firstPokemon : this.secondPokemon;
        }
        else 
        {
            return this.firstPokemon.speed > this.secondPokemon.speed ? this.firstPokemon : this.secondPokemon;
        }
      }

      calculateDamage(move: Move): number {
          
        let atk: number;
        let def: number;

        if(move.category == Category.Physic)
        {
            atk = this.firstPokemon.attack;
            def = this.secondPokemon.defense;
        }
        else
        {
            atk = this.firstPokemon.spAttack;
            def = this.secondPokemon.spDefense;
        }
        return Math.floor(Math.floor(Math.floor((2 * this.firstPokemon.level) / (5 + 2)) * atk * move.power / def) / 50) + 2;
      }

      attack(defender:Pokemon, move:Move): void 
      {
          let damage = this.calculateDamage(move);
          defender.hp = defender.hp - damage;
      }

}

export { Battle };