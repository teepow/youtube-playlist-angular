import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private loginUrl = 'http://127.0.0.1:8000/api/auth/signup';  // URL to web api

  constructor(private http: HttpClient) { }

  /** Login to laravel **/
  signup(form) {
    return this.http.post(this.loginUrl, form).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
}
