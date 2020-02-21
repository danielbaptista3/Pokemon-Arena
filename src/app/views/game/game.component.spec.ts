import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get fastest pokemon', () => {
    let pkmn1 = new Pokemon();
    pkmn1.setSpeed(10);

    let pkmn2 = new Pokemon();
    pkmn2.setSpeed(100);
    expect(getFastest(pkmn1, pkmn2)).toBe(pkmn2);
  });
});
