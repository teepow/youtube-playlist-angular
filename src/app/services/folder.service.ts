import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Folder } from '../models/folder';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TokenService} from "./token.service";
import {Subscription} from "../models/subscription";

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  private foldersBaseUrl = 'http://127.0.0.1:8000/folders';  // URL to web api
  private subscriptionsBaseUrl = 'http://127.0.0.1:8000/subscriptions';  // URL to web api

  token = this.tokenService.getToken();

  constructor(private http: HttpClient,
              private tokenService: TokenService
  ) {}

  /** GET folders from the server */
  getFolders (): Observable<Folder[]> {
    return this.http.get<Folder[]>(this.foldersBaseUrl)
    .pipe(
      catchError(this.handleError('getFolders', []))
    );
  }

  deleteSubscription(subscription_id): Observable<Folder[]> {
    return this.http.delete<Folder[]>(this.subscriptionsBaseUrl + '/' + subscription_id)
    .pipe(
      catchError(this.handleError('deleteSubscription', []))
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
