import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs/index";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Folder} from "../models/folder";
import {TokenService} from "./token.service";
import {FolderService} from "./folder.service";
import {Subscription} from "../models/subscription";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionManagerService {

  //Holds the folders; Changes value as folders are updated
  foldersSource: BehaviorSubject<any> = new BehaviorSubject([]);
  subscriptionsSource: BehaviorSubject<any> = new BehaviorSubject([]);

  private subscriptionsBaseUrl = 'http://127.0.0.1:8000/subscriptions';  // URL to web api
  private foldersBaseUrl = 'http://127.0.0.1:8000/folders';

  token = this.tokenService.getToken();

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private folderService: FolderService
  ) { }

  moveToFolder(subscription_id, folder_id) {
    this.http.get(this.subscriptionsBaseUrl + '/' + subscription_id + '/' + folder_id + '/edit')
      .subscribe((folders) => this.foldersSource.next(folders));
  }

  moveToNoFolder(subscription_id) {
    this.http.get(this.subscriptionsBaseUrl + '/' + subscription_id + '/' + 0 + '/edit')
      .subscribe((subscriptions) => this.subscriptionsSource.next(subscriptions));
  }

  addFolder(form) {
    this.http.post(this.foldersBaseUrl, form)
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
