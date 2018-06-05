import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Folder } from '../models/folder';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  foldersSource: BehaviorSubject<any> = new BehaviorSubject([]);

  private foldersBaseUrl = 'http://127.0.0.1:8000/folders';

  constructor(private http: HttpClient) {}

  getFolders (): Observable<Folder[]> {
    return this.http.get<Folder[]>(this.foldersBaseUrl);
  }

  addFolder(form) {
    this.http.post(this.foldersBaseUrl, form)
      .subscribe((folders) => this.foldersSource.next(folders));
    console.log(this.foldersSource);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
