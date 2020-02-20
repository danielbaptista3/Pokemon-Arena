import { Component } from '@angular/core';
import { Move } from './model/move/move';
import { Category } from './model/move/Category';
import { Pokemon } from './model/pokemon/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokemonArena';

  squirtleMoves = [new Move("Tackle", 40, Category.Physic, 1), new Move("Water Gun", 40, Category.Special, 1)];
  squirtle = new Pokemon("Squirtle", 5, 38, 7, 12, 11, 10, 9, this.squirtleMoves);

}
