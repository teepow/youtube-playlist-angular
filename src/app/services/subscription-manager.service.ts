import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs/index";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Folder} from "../models/folder";
import {TokenService} from "./token.service";
import {FolderService} from "./folder.service";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionManagerService {

  //Holds the folders; Changes value as folders are updated
  foldersSource: BehaviorSubject<any> = new BehaviorSubject([]);

  private subscriptionsBaseUrl = 'http://127.0.0.1:8000/subscriptions';  // URL to web api

  token = this.tokenService.getToken();

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private folderService: FolderService
  ) { }

  moveToFolder(subscription_id, folder_id) {
    //set token in headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    this.http.get(this.subscriptionsBaseUrl + '/' + subscription_id + '/' + folder_id + '/edit', httpOptions)
      .subscribe((folders) => this.foldersSource.next(folders));
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
