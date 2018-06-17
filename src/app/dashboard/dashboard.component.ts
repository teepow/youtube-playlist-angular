import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthStatusService} from "../auth/auth-status.service";
import { RouterModule} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public visible = null;

  constructor(private authStatus : AuthStatusService) { }

  ngOnInit() {
    this.authStatus.status.subscribe((status) => {
       this.visible = status;
    });
  }
}
