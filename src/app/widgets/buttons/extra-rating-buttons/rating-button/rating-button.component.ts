import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-button',
  templateUrl: './rating-button.component.html',
  styleUrls: ['./rating-button.component.less']
})
export class RatingButtonComponent implements OnInit {

  @Input() like: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
