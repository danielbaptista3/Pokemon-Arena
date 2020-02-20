import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './views/game/game.component';
import { TeamBuilderComponent } from './views/team-builder/team-builder.component';
import {HomeComponent} from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'teamBuilder', component: TeamBuilderComponent},
  { path: 'game', component: GameComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
