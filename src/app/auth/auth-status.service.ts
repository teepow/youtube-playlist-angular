import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {TokenService} from "./token/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthStatusService {

  private loggedIn = new BehaviorSubject<boolean>(this.Token.isLoggedIn());

  //subscribed to by auth component to determine whether or not to show certain components
  status = this.loggedIn.asObservable();

  /**
   * change the status of the loggedIn observable
   * @param {boolean} value boolean value for which to set loggedIn
   */
  changeStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  constructor(private Token: TokenService) { }
}
