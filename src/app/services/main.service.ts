import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {ABTestingService} from './ab-testing.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  userHistory = [];
  private appSettings = new ReplaySubject<any>();
  private userId: string;
  private newUser: boolean;

  constructor(private http: HttpClient, private abTestingService: ABTestingService) {
    this.init();
    this.http.get(environment.appServer + '/app-settings').subscribe((settings: any) => {
      this.appSettings.next(settings);
    });
  }

  isNewUser(): boolean {
    return this.newUser;
  }

  getRelevantProducts(): Observable<any> {
    return this.http.get(environment.appServer + '/products');
  }

  getAppSettings(): Subject<any> {
    return this.appSettings;
  }

  init(): void {
    const history = JSON.parse(localStorage.getItem('userHistory'));
    if (history) {
      this.userHistory = history;
    }
    this.handleUserId();
  }

  saveUserState(): void {
    localStorage.setItem('userHistory', JSON.stringify(this.userHistory));
    const reqBody = {
      ratingButtonsModeA: this.abTestingService.ratingButtonsModeA,
      userId: this.userId,
      userHistory: this.userHistory
    };
    this.http.post(environment.appServer + '/user-history', reqBody).subscribe();
  }

  private handleUserId(): void {
    this.userId = localStorage.getItem('userId');
    if (this.userId) {
      this.newUser = false;
    } else {
      this.newUser = true;
      this.userId = new Date().valueOf().toString();
      this.saveUserId();
    }
  }

  private saveUserId(): void {
    localStorage.setItem('userId', this.userId);
  }

  getProducts(productsIds: any[]): Observable<any[]> {
    return this.http.post<any>(environment.appServer + '/products-by-ids', productsIds);
  }

}
