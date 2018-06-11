import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://127.0.0.1:8000/api/auth/login',
    singup: 'http://127.0.0.1:8000/api/auth/signup'
  }

  constructor() { }

  handleToken(token) {
    this.setToken(token);
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  tokenIsValid(token) {
    if(this.getToken()) {
      const payload = this.getPayload(token);

      if (payload) {
        return this.iss.login === payload.iss || this.iss.singup === payload.iss
      }
    }
    return false;
  }

  getPayload(token) {
    const payload = token.split('.')[1];
    return this.decodePayload(payload);
  }

  decodePayload(payload) {
    return JSON.parse(atob(payload));
  }

  isLoggedIn() {
    return this.tokenIsValid(this.getToken());
  }
}
