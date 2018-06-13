import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs/index";

import {SubscriptionManagerSubscription} from "./subscription-manager-subscription";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionManagerSubscriptionService {
  private subscriptionsBaseUrl = 'http://127.0.0.1:8000/subscriptions';

  constructor(private http: HttpClient) {}

  getNoFolderSubscriptions (): Observable<SubscriptionManagerSubscription[]> {
    return this.http.get<SubscriptionManagerSubscription[]>(this.subscriptionsBaseUrl + '/no-folder');
  }

  addSubscription(channel_id) {
    this.http.post(this.subscriptionsBaseUrl,  {'channel_id' : channel_id})
      .subscribe(response => console.log(response));
  }

  deleteSubscription(subscription_id){
    this.http.delete(this.subscriptionsBaseUrl + '/' + subscription_id)
      .subscribe(response => console.log(response));
  }

  moveToFolder(subscription_id, folder_id) {
    this.http.get(this.subscriptionsBaseUrl + '/' + subscription_id + '/' + folder_id + '/edit')
      .subscribe(response => console.log(response));
  }

  moveToNoFolder(subscription_id) {
    this.http.get(this.subscriptionsBaseUrl + '/' + subscription_id + '/edit')
      .subscribe(response => console.log(response));
  }
}
