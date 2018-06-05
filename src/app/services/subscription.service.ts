import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "../models/subscription";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private subscriptionsBaseUrl = 'http://127.0.0.1:8000/subscriptions';

  constructor(private http: HttpClient) {}

  getNoFolderSubscriptions (): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.subscriptionsBaseUrl + '/no-folder');
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
