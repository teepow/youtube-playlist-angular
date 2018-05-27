import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://127.0.0.1:8000/api/auth/login';  // URL to web api

  constructor(private http: HttpClient) { }

  /** Login to laravel **/
  login(form) {
    return this.http.post(this.loginUrl, form).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
}
