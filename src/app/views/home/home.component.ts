import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/service/GameService';
import { Trainer } from 'src/app/models/trainer/trainer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trainerName: string;
  constructor(private route: ActivatedRoute, private router: Router, private gameService:GameService) { }

  ngOnInit(): void {
  }

  goToTeamBuilder() {
    let trainer = new Trainer(this.trainerName.toString());
    this.gameService.setTrainer(trainer);
    this.router.navigate(['teamBuilder']);
  }

  setTrainerName(event) : void
  {
    this.trainerName = event.target.value;
  }
  
}
