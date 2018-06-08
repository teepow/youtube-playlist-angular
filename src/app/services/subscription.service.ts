import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "../models/subscription";
import {BehaviorSubject, Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  //subscribed to by SubscriptionManager component
  subscriptionsSource: BehaviorSubject<any> = new BehaviorSubject([]);

  private subscriptionsBaseUrl = 'http://127.0.0.1:8000/subscriptions';

  constructor(private http: HttpClient) {}

  getNoFolderSubscriptions (): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.subscriptionsBaseUrl + '/no-folder');
  }

  addSubscription(channel_id) {
    this.http.post(this.subscriptionsBaseUrl,  {'channel_id' : channel_id})
      .subscribe(response => this.subscriptionsSource.next(response));
  }
}
