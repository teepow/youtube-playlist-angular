import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

import { SubscriptionManagerFolder } from './subscription-manager-folder';

import {TreeNode} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionManagerFolderService {

  private foldersBaseUrl = 'http://youtubeplaylist-laravel.tompowers.website/folders';

  constructor(private http: HttpClient) {}

  getFolders (): Observable<SubscriptionManagerFolder[]> {
    return this.http.get<SubscriptionManagerFolder[]>(this.foldersBaseUrl);
  }

  addFolder(form): Observable<any>  {
    return this.http.post(this.foldersBaseUrl, form);
  }

  deleteFolder(folder_id): Observable<any>  {
    return this.http.delete(this.foldersBaseUrl + '/' + folder_id);
  }

}
