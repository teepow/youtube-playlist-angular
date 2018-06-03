import { Component, OnInit } from '@angular/core';
import { Folder } from '../../models/folder';
import { FolderService } from '../../services/folder.service';
import {SubscriptionService} from "../../services/subscription.service";
import {SubscriptionManagerService} from "../../services/subscription-manager.service";

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  folders : Folder[];


  constructor(private folderService: FolderService,
              private subscriptionService: SubscriptionService,
              private subscriptionManagerService: SubscriptionManagerService

  ) { }

  ngOnInit() {
    this.subscriptionManagerService.foldersSource.subscribe((folders) => {
      this.folders = folders;
    });
    this.getFolders();
  }

  getFolders(): void {
    this.folderService.getFolders()
      .subscribe(folders => this.folders = folders);
  }

  moveToFolder(subscription_id, folder_id) {
    this.subscriptionManagerService.moveToFolder(subscription_id, folder_id);
  }
}
