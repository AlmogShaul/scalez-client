import {Component, OnInit} from '@angular/core';
import {MainService} from '../../../services/main.service';
import {Observable} from 'rxjs';
import _ from 'lodash';

@Component({
  selector: 'app-closet',
  templateUrl: './closet.component.html',
  styleUrls: ['./closet.component.less']
})
export class ClosetComponent {
  closetProducts: any[];

  constructor(private mainService: MainService) {
    this.init();
  }

  init(): void {
    if (this.mainService.userHistory) {
      const likedProducts = this.mainService.userHistory.filter(item => item.like).map(pr => pr.productId);
      this.mainService.getProducts(likedProducts).subscribe(products => {
        products.forEach(pr => pr.mainImage = JSON.parse(pr.images)[0]);
        this.closetProducts = _.uniqBy(products, 'productId');
      });
    }
  }


}
