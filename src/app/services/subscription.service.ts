import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";
import {catchError} from "rxjs/operators";
import {TokenService} from "./token.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subscription} from "../models/subscription";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private noFolderSubscriptionsUrl = 'http://127.0.0.1:8000/subscriptions/no-folder';  // URL to web api

  token = this.tokenService.getToken();

  constructor(private http: HttpClient,
              private tokenService: TokenService
  ) {}

  /** GET noFolderSubscriptions from the server */
  getNoFolderSubscriptions (): Observable<Subscription[]> {
    //set token in headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.http.get<Subscription[]>(this.noFolderSubscriptionsUrl, httpOptions)
      .pipe(
        catchError(this.handleError('getNoFolderSubscriptions', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
