import {Component, Input, OnInit} from '@angular/core';
import {MainService} from "../../../services/main.service";
import {Router} from "@angular/router";
import {RouterService} from "../../../services/router.service";

@Component({
  selector: 'app-rating-experience',
  templateUrl: './rating-experience.component.html',
  styleUrls: ['./rating-experience.component.less']
})
export class RatingExperienceComponent implements OnInit {

  currentProduct: any;
  products: any;
  productImage: string;
  productCategory: string;
  settings: any;

  constructor(private router: RouterService, private mainService: MainService) {
    this.mainService.getRelevantProducts().subscribe(data => {
      this.products = data;
      this.setCurrentProduct();
    });
    this.mainService.getAppSettings().subscribe(settings => {
      this.settings = settings;
    });
  }

  setCurrentProduct(): void {
    this.currentProduct = this.products.pop();
    if (this.currentProduct) {
      this.productImage = JSON.parse(this.currentProduct.images);
      this.productCategory = JSON.parse(this.currentProduct.categories)[0][0];
    }else{
      this.navigateToNextPage();
    }
  }

  ngOnInit(): void {
  }

  navigateToNextPage(): void {
     if (this.mainService.isNewUser()){
      this.router.navigateTo('/savvy');
    }else{
      this.router.navigateTo('/closet');
    }
  }

  dislike(): void {
    this.mainService.userHistory.push({productId: this.currentProduct._id, like: false});
    this.setCurrentProduct();

  }

  like(): void {
    this.mainService.userHistory.push({productId: this.currentProduct._id, like: true});
    this.setCurrentProduct();
  }
}
