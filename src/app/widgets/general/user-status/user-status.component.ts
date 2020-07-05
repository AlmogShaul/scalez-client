import {Component, OnInit} from '@angular/core';
import {MainService} from '../../../services/main.service';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.less']
})
export class UserStatusComponent implements OnInit {
  minProductsToLike: number;
  likedProductsSum: number;
  userHasMinRatings: boolean;

  constructor( private mainService: MainService) {
  }

  ngOnInit(): void {
    this.mainService.getAppSettings().subscribe(settings => {
      this.minProductsToLike = settings.minRatedProducts;
      this.likedProductsSum = this.mainService.userHistory.filter(p => p.like).length;
      if (this.likedProductsSum >= settings.minRatedProducts) {
        this.userHasMinRatings = true;
      } else {
        this.userHasMinRatings = false;
      }
    });
  }

}
