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

  private foldersBaseUrl = 'http://127.0.0.1:8000/folders';

  constructor(private http: HttpClient) {}

  getFolders (): Observable<SubscriptionManagerFolder[]> {
    return this.http.get<SubscriptionManagerFolder[]>(this.foldersBaseUrl);
  }

  addFolder(form) {
    this.http.post(this.foldersBaseUrl, form)
      .subscribe(response => console.log(response));
  }

  deleteFolder(folder_id) {
    this.http.delete(this.foldersBaseUrl + '/' + folder_id)
      .subscribe(response => console.log(response));
  }

}
