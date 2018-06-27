import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://youtubeplaylist-laravel.tompowers.website/api/auth/login',
    singup: 'http://youtubeplaylist-laravel.tompowers.website/api/auth/signup'
  }

  constructor() { }

  /**
   * Handle JWT token from server
   * @param token the JWT token
   */
  handleToken(token) {
    this.setToken(token);
  }

  /**
   * set the token in local storage
   * @param token the JWT token
   */
  setToken(token) {
    localStorage.setItem('token', token);
  }

  /**
   * retreive JWT token from local storage
   * @returns the JWT token
   */
  getToken() {
    return localStorage.getItem('token');
  }

  /**
   * remove the JWT token
   */
  removeToken() {
    localStorage.removeItem('token');
  }

  /**
   * determine if your token is valid
   * @param token the JWT token
   * @returns {boolean}
   */
  tokenIsValid(token) {
    if(this.getToken()) {
      const payload = this.getPayload(token);

      if (payload) {
        return this.iss.login === payload.iss || this.iss.singup === payload.iss
      }
    }
    return false;
  }

  /**
   * get payload from the JWT token
   * @param token the JWT token
   * @returns payload
   */
  getPayload(token) {
    const payload = token.split('.')[1];
    return this.decodePayload(payload);
  }

  /**
   * decode the payload
   * @param payload the JWT token's payload
   * @returns {any}
   */
  decodePayload(payload) {
    return JSON.parse(atob(payload));
  }

  /**
   * determine if user is logged in
   * @returns {boolean}
   */
  isLoggedIn() {
    return this.tokenIsValid(this.getToken());
  }
}
