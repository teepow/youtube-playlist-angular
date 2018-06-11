import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://127.0.0.1:8000/api/auth';  // URL to web api

  constructor(private http: HttpClient) { }

  /** Login to laravel **/
  signup(form) {
    return this.http.post(`${this.baseUrl}/signup`, form);
  }

  /** Register on laravel **/
  login(form) {
    return this.http.post(`${this.baseUrl}/login`, form);
  }

  /** Send password reset email with Laravel **/
  sendPasswordResetLink(form) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, form);
  }

  changePassword(form) {
    return this.http.post(`${this.baseUrl}/resetPassword`, form);
}

}
