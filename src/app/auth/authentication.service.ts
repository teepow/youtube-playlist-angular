import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://youtubeplaylist-laravel.tompowers.website/api/auth';  // URL to web api

  constructor(private http: HttpClient) { }

  /**
   * Log in the user on server
   * @param form sign in form
   * @returns {Observable<Object>}
   */
  signup(form) {
    return this.http.post(`${this.baseUrl}/signup`, form);
  }

  /**
   * Register new user on server
   * @param form signup form
   * @returns {Observable<Object>}
   */
  login(form) {
    return this.http.post(`${this.baseUrl}/login`, form);
  }

  /**
   * Send a password reset email to user
   * @param form password reset form
   * @returns {Observable<Object>}
   */
  sendPasswordResetLink(form) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, form);
  }

  /**
   * Reset the user's password on the server
   * @param form change password form
   * @returns {Observable<Object>}
   */
  changePassword(form) {
    return this.http.post(`${this.baseUrl}/resetPassword`, form);
}

}
