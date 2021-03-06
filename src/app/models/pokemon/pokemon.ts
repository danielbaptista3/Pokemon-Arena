
import { Move } from "../move/move";

class Pokemon {

    name: string;
    level: number;
    hp: number;
    speed: number;
    attack: number;
    spAttack: number;
    defense: number;
    spDefense: number;
    moves: Move[];
    currentHp: number;

    /*constructor(name: string, level: number, hp:number, speed: number, attack:number, spAttack: number, defense:number, spDefense: number, move: Move[])
    {
        this.name = name;
        this.level = level;
        this.hp = hp;
        this.speed = speed;
        this.attack = attack;
        this.spAttack = spAttack;
        this.defense = defense;
        this.spDefense = spDefense;
        this.move = move;
        this.image = name;
        this.currentHp = hp;
    }
    */

    constructor(data){
      this.name = data.name;
      this.level = 50;
      this.speed = data.stats[0].base_stat;
      this.spDefense = data.stats[1].base_stat;
      this.spAttack = data.stats[2].base_stat;
      this.defense = data.stats[3].base_stat;
      this.attack = data.stats[4].base_stat;
      this.hp = data.stats[5].base_stat;

      this.moves = [];


    }

}

export { Pokemon }
