import { Pokemon } from "../pokemon/pokemon"

class Trainer {

    name: string;
    pokemons: Pokemon[] = [];

    constructor(name: string)
    {
        this.name = name;
    }

    setTeam(pokemons: Pokemon[]) : void
    {
        this.pokemons = pokemons;
    }

    changeOrder(oldPosition:number, newPosition:number) : void
    {
        let firstPokemonToSwitch = this.pokemons[oldPosition];
        let secondPokemonToSwitch = this.pokemons[newPosition];
        
        this.pokemons[newPosition] = firstPokemonToSwitch;
        this.pokemons[oldPosition] = secondPokemonToSwitch;
    }
}

export { Trainer }