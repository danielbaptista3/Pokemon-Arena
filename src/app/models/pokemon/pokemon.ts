import {Battle} from "../../arena/battle"
import { Move } from "../move/move";

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
    image: string;

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
        this.image = name;
    }

    public getName() : string
    {
        return this.name;
    }

    public getHp(): number
    {
        return this.hp;
    }
}

export { Pokemon }