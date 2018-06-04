import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "../../models/subscription";
import {SubscriptionService} from "../../services/subscription.service";
import {FolderService} from "../../services/folder.service";
import {Folder} from "../../models/folder";
import {SubscriptionManagerService} from "../../services/subscription-manager.service";

@Component({
  selector: 'app-no-folder-subs',
  templateUrl: './no-folder-subs.component.html',
  styleUrls: ['./no-folder-subs.component.css']
})
export class NoFolderSubsComponent implements OnInit {

  @Input() folderSubscriptions: Subscription[];

  noFolderSubscriptions : Subscription[];

  folders : Folder[];

  constructor(private subscriptionService: SubscriptionService,
              private folderService: FolderService,
              private subscriptionManagerService: SubscriptionManagerService
              ) { }

  ngOnInit() {
    this.subscriptionManagerService.subscriptionsSource.subscribe((noFolderSubscriptions) => {
       this.noFolderSubscriptions = noFolderSubscriptions;
    });
    this.getNoFolderSubscriptions();
    this.getFolders();
  }

  getNoFolderSubscriptions(): void {
    this.subscriptionService.getNoFolderSubscriptions()
      .subscribe(noFolderSubscriptions => this.noFolderSubscriptions = noFolderSubscriptions);
  }

  getFolders(): void {
    this.folderService.getFolders()
      .subscribe(folders => this.folders = folders);
  }

  moveToFolder(subscription_id, folder_id) {
    this.subscriptionManagerService.moveToFolder(subscription_id, folder_id);
    this.subscriptionService.getNoFolderSubscriptions()
      .subscribe(noFolderSubscriptions => this.noFolderSubscriptions = noFolderSubscriptions);
  }

  deleteSubscription(subscription_id) {
    this.subscriptionService.deleteSubscription(subscription_id)
      .subscribe(noFolderSubscriptions => this.noFolderSubscriptions = noFolderSubscriptions);
  }
}
