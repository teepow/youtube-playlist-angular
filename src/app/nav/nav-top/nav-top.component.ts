import { Component, OnInit } from '@angular/core';
import {AuthStatusService} from "../../auth/auth-status.service";
import {Router} from "@angular/router";
import {TokenService} from "../../auth/token/token.service";

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {

  public loggedIn: boolean;

  constructor(private authStatus: AuthStatusService,
              private router: Router,
              private tokenService: TokenService,
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
