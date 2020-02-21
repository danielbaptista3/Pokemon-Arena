export interface ApiPokemon {
    name: string,
    stats: {
      base_stat: number,
      stat: {
        name: string
      }
    },
    moves: {
        move: {
            name: string,
            url: string,
        }
    }[]
  }