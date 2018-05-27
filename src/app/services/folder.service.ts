import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Folder } from '../folder';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  private foldersUrl = 'http://127.0.0.1:8000/folders';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET folders from the server */
  /** GET folders from the server */
  getFolders (): Observable<Folder[]> {
    return this.http.get<Folder[]>(this.foldersUrl)
    .pipe(
      catchError(this.handleError('getFolders', []))
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
