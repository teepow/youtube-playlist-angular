import { Component, OnInit } from '@angular/core';
import {AuthStatusService} from "../../auth/auth-status.service";
import {Router} from "@angular/router";
import {TokenService} from "../../auth/token/token.service";
import {NavTopService} from "./nav-top.service";

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {

  showPlaylist : boolean;

  public loggedIn: boolean;

  constructor(private authStatus: AuthStatusService,
              private router: Router,
              private tokenService: TokenService,
              private navTopService : NavTopService
  ) { }


  ngOnInit() {
    this.authStatus.status.subscribe(value => this.loggedIn = value);
    this.navTopService.status.subscribe(status => this.showPlaylist = status);
  }

  togglePlaylist() {
    this.navTopService.togglePlaylist();
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.authStatus.changeStatus(false);
    this.tokenService.removeToken();
    this.router.navigateByUrl("/login");
  }
}
