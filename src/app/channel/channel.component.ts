import { Component, OnInit } from '@angular/core';
import {ChannelService} from "../services/channel.service";
import { Channel } from '../models/channel';
import { SubscriptionService } from '../services/subscription.service';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  channel : Channel;

  constructor(private channelService: ChannelService,
              private subscriptionService: SubscriptionService
   ) { }

  ngOnInit() {
    this.channelService.channelSource.subscribe((channel) => {
       this.channel = channel;
    });
  }

  subscribe(channel_id) {
    this.subscriptionService.addSubscription(channel_id);
  }

}
