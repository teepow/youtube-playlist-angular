import { Component, OnInit } from '@angular/core';
import {DashboardChannelService} from "../../../../dashboard/dashboard-channel/dashboard-channel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-top-channel-search-form',
  templateUrl: './nav-top-channel-search-form.component.html',
  styleUrls: ['./nav-top-channel-search-form.component.css']
})
export class NavTopChannelSearchFormComponent implements OnInit {

  public form = {
      url : null
  }

  error : null;

  constructor(private channelService : DashboardChannelService,
              private router: Router,) { }

  ngOnInit() {
  }

  onSubmit(form) {
      this.channelService.getChannel(this.form).subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error)
      )
    this.router.navigateByUrl('/channel');
  }

  handleResponse(response) {
    this.error = null;
    this.channelService.changeChannel(response);
    this.channelService.storeChannelInLocalStorage(response);
  }

  handleError(error) {
    this.error = error.error.error;
  }
}
