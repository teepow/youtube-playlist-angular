import { Component, OnInit } from '@angular/core';
import {AuthStatusService} from "../services/auth-status.service";
import {Router} from "@angular/router";
import {TokenService} from "../services/token.service";
import {NavbarService} from "../services/navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean;

  constructor(private authStatus: AuthStatusService,
              private router: Router,
              private tokenService: TokenService,
              public nav: NavbarService
  ) { }

  ngOnInit() {
    this.authStatus.status.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.authStatus.changeStatus(false);
    this.router.navigateByUrl("/login");
    this.tokenService.removeToken();
  }

}
