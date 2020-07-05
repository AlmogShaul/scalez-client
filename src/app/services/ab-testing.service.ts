import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ABTestingService {

  ratingButtonsModeA: boolean;
  constructor() {
    this.ratingButtonsModeA =  Math.random() > 0.5;
  }
}
