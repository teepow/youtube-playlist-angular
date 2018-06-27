import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs/index";

import {SubscriptionManagerSubscription} from "./subscription-manager-subscription";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionManagerSubscriptionService {
  private subscriptionsBaseUrl = 'http://youtubeplaylist-laravel.tompowers.website/subscriptions';

  constructor(private http: HttpClient) {}

  getNoFolderSubscriptions (): Observable<SubscriptionManagerSubscription[]> {
    return this.http.get<SubscriptionManagerSubscription[]>(this.subscriptionsBaseUrl + '/no-folder');
  }

  addSubscription(channel_id): Observable<any> {
    return this.http.post(this.subscriptionsBaseUrl,  {'channel_id' : channel_id});
  }

  deleteSubscription(subscription_id): Observable<any> {
    return this.http.delete(this.subscriptionsBaseUrl + '/' + subscription_id);
  }

  moveToFolder(subscription_id, folder_id): Observable<any>  {
    return this.http.get(this.subscriptionsBaseUrl + '/' + subscription_id + '/' + folder_id + '/edit');
  }

  moveToNoFolder(subscription_id): Observable<any>  {
    return this.http.get(this.subscriptionsBaseUrl + '/' + subscription_id + '/edit');
  }
}
