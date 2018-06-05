import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionManagerService {

  foldersSource: BehaviorSubject<any> = new BehaviorSubject([]);
  subscriptionsSource: BehaviorSubject<any> = new BehaviorSubject([]);

  private subscriptionsBaseUrl = 'http://127.0.0.1:8000/subscriptions';

  constructor(private http: HttpClient) { }

  moveToFolder(subscription_id, folder_id) {
    this.http.get(this.subscriptionsBaseUrl + '/' + subscription_id + '/' + folder_id + '/edit')
      .subscribe(response => this.loadBehaviorSubjects(response));
  }

  moveToNoFolder(subscription_id) {
    this.http.get(this.subscriptionsBaseUrl + '/' + subscription_id + '/edit')
      .subscribe(response => this.loadBehaviorSubjects(response));
  }

  deleteSubscription(subscription_id){
    this.http.delete(this.subscriptionsBaseUrl + '/' + subscription_id)
      .subscribe(response => this.loadBehaviorSubjects(response));
  }

  private loadBehaviorSubjects(response) {
          this.foldersSource.next(response['folders']),
          this.subscriptionsSource.next(response['no_folder_subscriptions'])
          console.log(this.subscriptionsSource);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
