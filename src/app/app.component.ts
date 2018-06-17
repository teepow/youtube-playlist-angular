import { Component, OnInit } from '@angular/core';
import { AuthStatusService } from './auth/auth-status.service';
import {NavTopService} from "./nav/nav-top/nav-top.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public loggedIn = null;

  public showPlaylist = true;

  constructor(private authStatus : AuthStatusService,
              private navTopService : NavTopService
    ) { }

  ngOnInit() {
    this.authStatus.status.subscribe((status) => {
       this.loggedIn = status;
    });
    this.navTopService.status.subscribe((status) => {
       this.showPlaylist = status;
    });
  }
}
