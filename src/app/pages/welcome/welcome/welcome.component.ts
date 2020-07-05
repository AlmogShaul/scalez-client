import { Component, OnInit } from '@angular/core';
import {RouterService} from '../../../services/router.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: RouterService) { }

  ngOnInit(): void {
  }
  nextClicked(): void {
    this.navigateToRatingExperience();
  }

  navigateToRatingExperience(): void {
    this.router.navigateTo('/rating-experience');
  }
}
