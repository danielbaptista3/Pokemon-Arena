import { Pokemon } from "../model/pokemon/pokemon";
import { Move } from "../model/move/move";
import { Category } from "../model/move/Category"

class Battle {
    
    firstPokemon: Pokemon;
    secondPokemon: Pokemon;

    constructor(firstPokemon: Pokemon, secondPokemon: Pokemon)
    {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }

    getFastestPokemon(): Pokemon {
        let fastest:Pokemon;

        if(this.firstPokemon.speed == this.secondPokemon.speed)
        {
            fastest = Math.floor(Math.random() * 2) == 0 ? this.firstPokemon : this.secondPokemon;
        }
        else 
        {
            fastest = this.firstPokemon.speed > this.secondPokemon.speed ? this.firstPokemon : this.secondPokemon;
        }

        return fastest;
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