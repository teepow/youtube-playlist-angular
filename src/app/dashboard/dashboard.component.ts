import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {AuthStatusService} from "../services/auth-status.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public visible = null;

  constructor(private router: Router,
              private authStatus : AuthStatusService
              ) { }

  ngOnInit() {
    this.authStatus.status.subscribe((status) => {
       this.visible = status;
    });
      console.log(this.visible);
  }

  startPlaylist() {
    this.router.navigateByUrl('/playlist');
  }
}
