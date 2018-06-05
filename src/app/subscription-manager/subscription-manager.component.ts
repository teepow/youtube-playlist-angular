import { Component, OnInit } from '@angular/core';

import { Folder } from '../models/folder';
import { FolderService } from '../services/folder.service';
import {SubscriptionManagerService} from "../services/subscription-manager.service";
import {Subscription} from "../models/subscription";
import {SubscriptionService} from "../services/subscription.service";

@Component({
  selector: 'app-subscription-manager',
  templateUrl: './subscription-manager.component.html',
  styleUrls: ['./subscription-manager.component.css']
})

export class SubscriptionManagerComponent implements OnInit {

  folders : Folder[];

  noFolderSubscriptions : Subscription[];

  constructor(private folderService: FolderService,
              private subscriptionManagerService : SubscriptionManagerService,
              private subscriptionService : SubscriptionService
  ) { }

  ngOnInit() {
    this.subscriptionManagerService.subscriptionsSource.subscribe((noFolderSubscriptions) => {
       this.noFolderSubscriptions = noFolderSubscriptions;
    });

    this.subscriptionManagerService.foldersSource.subscribe((folders) => {
      this.folders = folders;
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
