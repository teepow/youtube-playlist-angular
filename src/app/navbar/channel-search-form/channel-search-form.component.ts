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

  constructor(private channelService : ChannelService,
              private router: Router,) { }

  ngOnInit() {
  }

  onSubmit() {
  	this.channelService.getChannel(this.form);
    this.router.navigateByUrl('/channel');
  }
}
