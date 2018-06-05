import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "../../models/subscription";
import {SubscriptionService} from "../../services/subscription.service";
import {FolderService} from "../../services/folder.service";
import {Folder} from "../../models/folder";
import {SubscriptionManagerService} from "../../services/subscription-manager.service";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  @Input() subscription: Subscription;

  @Input() folders : Folder[];

  constructor(private subscriptionService: SubscriptionService,
              private folderService: FolderService,
              private subscriptionManagerService: SubscriptionManagerService
              ) { }

  ngOnInit() {
  }

  moveToFolder(subscription_id, folder_id) {
    this.subscriptionManagerService.moveToFolder(subscription_id, folder_id);
  }

  moveToNoFolder(subscription_id) {
    this.subscriptionManagerService.moveToNoFolder(subscription_id);
  }

  deleteSubscription(subscription_id) {
    this.subscriptionManagerService.deleteSubscription(subscription_id);
  }
}
