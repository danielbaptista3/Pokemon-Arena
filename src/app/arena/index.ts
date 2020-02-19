import { Pokemon } from "../model/pokemon/pokemon";
import { Move } from "../model/move/move";
import { Battle } from "./battle";

let charmanderMoves = [new Move("Scratch", 40, Category.Physic, 1), new Move("Ember", 40, Category.Special, 1)];
let charmander = new Pokemon("Charmander", 5, 35, 8, 14, 12, 8, 7, charmanderMoves);

let squirtleMoves = [new Move("Tackle", 40, Category.Physic, 1), new Move("Water Gun", 40, Category.Special, 1)];
let squirtle = new Pokemon("Squirtle", 5, 38, 7, 12, 11, 10, 9, squirtleMoves);

let isFinished = false;

while(isFinished)
{
    
    let battle = new Battle(charmander, squirtle);
    console.log("The battle between " + charmander.name + " and " + squirtle.name + " starts now !");
    
    let firstPokemon = battle.getFastestPokemon();
    
    let randomNumber = Math.floor(Math.random() * 2);
    battle.attack(firstPokemon, firstPokemon.move[randomNumber]);

    randomNumber = Math.floor(Math.random() * 2);
    battle.attack(undefined,null);//otherPokémon, otherPokémon.move[randomNumber]);

    if (charmander.hp <=0)
    {
        console.log(charmander.name + " has won !");
        isFinished = true;
    }

    if (squirtle.hp <=0)
    {
        console.log(squirtle.name + " has won !");
        isFinished = true;
    }

}
