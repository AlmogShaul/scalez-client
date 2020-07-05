import {Component, Injectable} from '@angular/core';
import {MainService} from './main.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router, private mainService: MainService) {
  }

  navigateTo(path: string): void {
    if (this.router.url === '/rating-experience'){
      this.mainService.saveUserState();
    }
    this.router.navigateByUrl(path);
  }
}
