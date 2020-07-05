import {Component, Input, OnInit} from '@angular/core';
import {ABTestingService} from '../../../../services/ab-testing.service';

@Component({
  selector: 'app-rating-button-ab-wrapper',
  templateUrl: './rating-button-ab-wrapper.component.html',
  styleUrls: ['./rating-button-ab-wrapper.component.less']
})
export class RatingButtonABWrapperComponent implements OnInit {

  @Input() like: boolean;
  modeA: boolean;

  constructor(private abTestingService: ABTestingService) {
    this.modeA = this.abTestingService.ratingButtonsModeA;
  }

  ngOnInit(): void {
  }

}
