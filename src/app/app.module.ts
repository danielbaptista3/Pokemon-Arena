import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { GameComponent } from './views/game/game.component';
import { HomeComponent} from './views/home/home.component';
import { TeamBuilderComponent } from './views/team-builder/team-builder.component';
import { GameService } from './service/GameService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,

    TeamBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    GameService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {apperance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
