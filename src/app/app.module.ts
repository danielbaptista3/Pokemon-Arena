import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { GameComponent } from './views/game/game.component';
//import { Battle } from './services/Battle';
//import { PokemonComponent } from './view/pokemon/pokemon.component';
//import { NewGameComponent } from './view/new-game/new-game.component';
//import { SpellDialogComponent } from './view/spell-dialog/spell-dialog.component';
import { HomeComponent} from './views/home/home.component';
//import { DialogService } from './services/dialog.service';
import { TeamBuilderComponent } from './views/team-builder/team-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    //PokemonComponent,
    //NewGameComponent,
    //SpellDialogComponent,
    TeamBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    //Battle,
    //DialogService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {apperance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
