import {Component, OnDestroy} from '@angular/core';
import {MainService} from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnDestroy{
  constructor(private mainService: MainService) {
  }

  ngOnDestroy(): void{
    this.mainService.saveUserState();
  }
}
