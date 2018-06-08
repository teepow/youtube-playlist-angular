import { Component, OnInit } from '@angular/core';
import {ChannelService} from "../../services/channel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-channel-search-form',
  templateUrl: './channel-search-form.component.html',
  styleUrls: ['./channel-search-form.component.css']
})
export class ChannelSearchFormComponent implements OnInit {

  public form = {
  	url : null
  }

  error : null;

  constructor(private channelService : ChannelService,
              private router: Router,) { }

  ngOnInit() {
  }

  onSubmit() {
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
