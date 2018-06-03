import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../services/dashboard.service";
import {Dashboard} from "../models/dashboard";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboard: Dashboard;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getDashboard();
  }

  getDashboard(){
    this.dashboardService.getDashboard()
      .subscribe((data: Dashboard) => this.dashboard = {...data});
  }
}
