import { Component, OnInit } from '@angular/core';
import { SubscriptionManagerFolder } from './subscription-manager-folder';
import { SubscriptionManagerFolderService } from './subscription-manager-folder.service';
import {SubscriptionManagerSubscriptionService} from "../subscription-manager-subscriptions/subscription-manager-subscription.service";
import {SubscriptionManagerService} from "../subscription-manager.service";
import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-folders',
  templateUrl: './subscription-manager-folders.component.html',
  styleUrls: ['./subscription-manager-folders.component.css']
})
export class SubscriptionManagerFoldersComponent implements OnInit {

  folders : SubscriptionManagerFolder[];


  constructor(private folderService: SubscriptionManagerFolderService,
              private subscriptionService: SubscriptionManagerSubscriptionService,
              private subscriptionManagerService: SubscriptionManagerService,
              private dragula: DragulaService

  ) {
      dragula.drop.subscribe((event) => {
        this.onDrop(event[3])
    });
  }

  ngOnInit() {
    this.subscriptionManagerService.foldersSource.subscribe((folders) => {
      this.folders = folders;
    });

    this.folderService.foldersSource.subscribe((folders) => {
      this.folders = folders;
    });

    this.getFolders();
  }

  getFolders(): void {
    this.folderService.getFolders()
      .subscribe(folders => this.folders = folders);
  }

  onDrop(grandparent) {
    var parentDivs = grandparent.childNodes;
    var folderIds = this.getFolderIds(parentDivs);
  }

  deleteFolder(folder_id) {
    this.folderService.deleteFolder(folder_id)
      .subscribe(folders => this.folders = folders);
  }

  private getFolderIds(parentDivs) {
    var folderIds = [];

    for(let i = 1; i < parentDivs.length; i++) {
      let folderId = this.getFolderId(parentDivs[i]);
      folderIds.push(folderId);
    }
    return folderIds;
  }

  private getFolderId(parentDiv) {
    let div = parentDiv.childNodes[0];
    let divId = div.id;
    let folderId = divId.substring(0, divId.indexOf('-'));
    return folderId;
  }
}
