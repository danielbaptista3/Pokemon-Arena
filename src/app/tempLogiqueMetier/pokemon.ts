import {Battle} from "./Battle"
import { Move } from "./move";

class Pokemon {
    
    name: string;
    level: number;
    hp: number
    speed: number;
    attack: number;
    spAttack: number;
    defense: number;
    spDefense: number;
    move: Move[];

    constructor(name: string, level: number, hp:number, speed: number, attack:number, spAttack: number, defense:number, spDefense: number, move: Move[])
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
    }
}

export { Pokemon }