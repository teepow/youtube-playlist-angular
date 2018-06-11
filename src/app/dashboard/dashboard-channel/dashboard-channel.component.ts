import { Component, OnInit } from '@angular/core';
import {DashboardChannelService} from "./dashboard-channel.service";
import { DashboardChannel } from './dashboard-channel';
import { SubscriptionManagerSubscriptionService} from '../../nav/nav-side/subscription-manager/subscription-manager-subscriptions/subscription-manager-subscription.service';


@Component({
  selector: 'app-channel',
  templateUrl: './dashboard-channel.component.html',
  styleUrls: ['./dashboard-channel.component.css']
})
export class DashboardChannelComponent implements OnInit {

  channel : DashboardChannel;

  constructor(private channelService: DashboardChannelService,
              private subscriptionService: SubscriptionManagerSubscriptionService
   ) { }

  ngOnInit() {
    this.channelService.channel.subscribe((channel) => {
       this.channel = channel;
    });
    this.channel = JSON.parse(localStorage.getItem('channel'));
  }

  subscribe(channel_id) {
    this.subscriptionService.addSubscription(channel_id);
  }

}
