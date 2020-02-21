import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBuilderComponent } from './team-builder.component';

describe('TeamBuilderComponent', () => {
  let component: TeamBuilderComponent;
  let fixture: ComponentFixture<TeamBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get pokémon', () => {
    let pkmn = this.getPokemon(1);
    expect(pkmn).toBeDefined();
  });

  it('pokemon has moves', () => {
    let pkmn = this.getPokemon(1);
    expect(pkmn.moves).toBeDefined();
  });
});
