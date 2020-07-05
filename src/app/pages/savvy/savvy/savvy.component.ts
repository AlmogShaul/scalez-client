import {Component, OnInit} from '@angular/core';
import {MainService} from '../../../services/main.service';
import {RouterService} from '../../../services/router.service';

@Component({
  selector: 'app-savvy',
  templateUrl: './savvy.component.html',
  styleUrls: ['./savvy.component.less']
})
export class SavvyComponent implements OnInit {
  userHasMinRatings: boolean;

  constructor(private router: RouterService, private mainService: MainService) {
  }

  ngOnInit(): void {
    this.mainService.getAppSettings().subscribe(settings => {
      if (this.mainService.userHistory.filter(p => p.like).length >= settings.minRatedProducts) {
        this.userHasMinRatings = true;
      } else {
        this.userHasMinRatings = false;
      }
    });
  }


  nextClicked(): void {
    if (this.userHasMinRatings) {
      this.router.navigateTo('/closet');
    } else {
      this.router.navigateTo('/rating-experience');
    }

  }
}
