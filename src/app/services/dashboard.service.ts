import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs/index";
import {catchError} from "rxjs/operators";
import {Dashboard} from "../models/dashboard";
import {TokenService} from "./token.service";
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboardUrl = 'http://127.0.0.1:8000/dashboard';  // URL to web api

  token = this.tokenService.getToken();

  constructor(private http: HttpClient,
              private tokenService: TokenService
  ) {}

  /** GET dashboard from the server */
  getDashboard() {
    //set token in headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };

    return this.http.get<Dashboard>(this.dashboardUrl, httpOptions);
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
      console.log("errors");
      return of(result as T);
    };
  }
}