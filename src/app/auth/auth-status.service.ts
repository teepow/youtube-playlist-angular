import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {TokenService} from "./token/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthStatusService {

  private loggedIn = new BehaviorSubject<boolean>(this.Token.isLoggedIn());

  status = this.loggedIn.asObservable();

  changeStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  constructor(private Token: TokenService) { }
}
