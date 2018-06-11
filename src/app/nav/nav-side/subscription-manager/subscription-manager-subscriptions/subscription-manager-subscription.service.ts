import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SubscriptionManagerSubscription} from "./subscription-manager-subscription";
import {BehaviorSubject, Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionManagerSubscriptionService {

  //subscribed to by SubscriptionManager component
  subscriptionsSource: BehaviorSubject<any> = new BehaviorSubject([]);

  private subscriptionsBaseUrl = 'http://127.0.0.1:8000/subscriptions';

  constructor(private http: HttpClient) {}

  getNoFolderSubscriptions (): Observable<SubscriptionManagerSubscription[]> {
    return this.http.get<SubscriptionManagerSubscription[]>(this.subscriptionsBaseUrl + '/no-folder');
  }

  addSubscription(channel_id) {
    this.http.post(this.subscriptionsBaseUrl,  {'channel_id' : channel_id})
      .subscribe(response => this.subscriptionsSource.next(response));
  }
}
