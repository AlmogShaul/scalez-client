import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ClosetModule} from './pages/closet/closet.module';
import {RatingExperienceModule} from './pages/rating-experience/rating-experience.module';
import {SavvyModule} from './pages/savvy/savvy.module';
import {WelcomeModule} from './pages/welcome/welcome.module';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './pages/welcome/welcome/welcome.component';
import {RatingExperienceComponent} from './pages/rating-experience/rating-experience/rating-experience.component';
import {ClosetComponent} from './pages/closet/closet/closet.component';
import {MainService} from './services/main.service';
import {HttpClientModule} from '@angular/common/http';
import {SavvyComponent} from './pages/savvy/savvy/savvy.component';
import {MainGuard} from './closet.guard';
import {ABTestingService} from "./services/ab-testing.service";
declare const Buffer;

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'rating-experience', component: RatingExperienceComponent, canActivate: [MainGuard] },
  { path: 'savvy', component: SavvyComponent, canActivate: [MainGuard] },
  { path: 'closet', component: ClosetComponent  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    WelcomeModule,
    ClosetModule,
    RatingExperienceModule,
    SavvyModule
  ],
  providers: [ABTestingService, MainService, MainGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
