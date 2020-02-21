import { Pokemon } from "../pokemon/pokemon"

class Bot {

    pokemons: Pokemon[] = [];

    constructor(){}

    setTeam(pokemons: Pokemon[]) : void
    {
        this.pokemons = pokemons;
    }

    getPokemons() : Pokemon[]
    {
        return this.pokemons;
    }
}

export { Bot }