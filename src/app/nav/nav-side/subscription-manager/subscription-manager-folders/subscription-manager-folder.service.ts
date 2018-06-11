import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SubscriptionManagerFolder } from './subscription-manager-folder';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionManagerFolderService {

  foldersSource: BehaviorSubject<any> = new BehaviorSubject([]);

  private foldersBaseUrl = 'http://127.0.0.1:8000/folders';

  constructor(private http: HttpClient) {}

  getFolders (): Observable<SubscriptionManagerFolder[]> {
    return this.http.get<SubscriptionManagerFolder[]>(this.foldersBaseUrl);
  }

  addFolder(form) {
    this.http.post(this.foldersBaseUrl, form)
      .subscribe((folders) => this.foldersSource.next(folders));
  }

  deleteFolder(folder_id) : Observable<SubscriptionManagerFolder[]> {
    return this.http.delete<SubscriptionManagerFolder[]>(this.foldersBaseUrl + '/' + folder_id);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
