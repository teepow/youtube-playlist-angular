import { Component, OnInit } from '@angular/core';

import { SubscriptionManagerFolder } from './subscription-manager-folders/subscription-manager-folder';
import { SubscriptionManagerFolderService } from './subscription-manager-folders/subscription-manager-folder.service';
import {SubscriptionManagerService} from "./subscription-manager.service";
import {SubscriptionManagerSubscription} from "./subscription-manager-subscriptions/subscription-manager-subscription";
import {SubscriptionManagerSubscriptionService} from "./subscription-manager-subscriptions/subscription-manager-subscription.service";

@Component({
  selector: 'app-subscription-manager',
  templateUrl: './subscription-manager.component.html',
  styleUrls: ['./subscription-manager.component.css']
})

export class SubscriptionManagerComponent implements OnInit {

  folders : SubscriptionManagerFolder[];

  noFolderSubscriptions : SubscriptionManagerSubscription[];

  constructor(private folderService: SubscriptionManagerFolderService,
              private subscriptionManagerService : SubscriptionManagerService,
              private subscriptionService : SubscriptionManagerSubscriptionService
  ) { }

  ngOnInit() {
    this.subscriptionManagerService.subscriptionsSource.subscribe((noFolderSubscriptions) => {
       this.noFolderSubscriptions = noFolderSubscriptions;
    });

    this.subscriptionManagerService.foldersSource.subscribe((folders) => {
      this.folders = folders;
    });

    this.subscriptionService.subscriptionsSource.subscribe((noFolderSubscriptions) => {
       this.noFolderSubscriptions = noFolderSubscriptions;
    });

    this.getNoFolderSubscriptions();

    this.getFolders();
  }

  getFolders(): void {
    this.folderService.getFolders()
      .subscribe(folders => this.folders = folders);
  }

  getNoFolderSubscriptions(): void {
    this.subscriptionService.getNoFolderSubscriptions()
      .subscribe(noFolderSubscriptions => this.noFolderSubscriptions = noFolderSubscriptions);
  }

}
