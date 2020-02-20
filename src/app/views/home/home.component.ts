import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trainerName;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  goToTeamBuilder() {
    this.router.navigate(['teamBuilder']);
  }

}
