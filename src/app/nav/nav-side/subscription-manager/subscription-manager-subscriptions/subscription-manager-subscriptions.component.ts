import {Component, Input, OnInit} from '@angular/core';
import {SubscriptionManagerSubscription} from "./subscription-manager-subscription";
import {SubscriptionManagerFolderService} from "../subscription-manager-folders/subscription-manager-folder.service";
import {SubscriptionManagerFolder} from "../subscription-manager-folders/subscription-manager-folder";
import {SubscriptionManagerService} from "../subscription-manager.service";
import {DashboardVideoService} from "../../../../dashboard/dashboard-videos/dashboard-video.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscription-manager-subscriptions.component.html',
  styleUrls: ['./subscription-manager-subscriptions.component.css']
})
export class SubscriptionManagerSubscriptionsComponent implements OnInit {

  constructor(private folderService: SubscriptionManagerFolderService,
              private subscriptionManagerService: SubscriptionManagerService,
              private videoService: DashboardVideoService,
              private router: Router
              ) { }

  ngOnInit() {
  }
}
