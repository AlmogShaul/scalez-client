import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating2-button',
  templateUrl: './rating2-button.component.html',
  styleUrls: ['./rating2-button.component.less']
})
export class Rating2ButtonComponent implements OnInit {

  @Input() like: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
