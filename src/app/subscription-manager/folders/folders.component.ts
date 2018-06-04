import { Component, OnInit } from '@angular/core';
import { Folder } from '../../models/folder';
import { FolderService } from '../../services/folder.service';
import {SubscriptionService} from "../../services/subscription.service";
import {SubscriptionManagerService} from "../../services/subscription-manager.service";
import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  folders : Folder[];


  constructor(private folderService: FolderService,
              private subscriptionService: SubscriptionService,
              private subscriptionManagerService: SubscriptionManagerService,
              private dragula: DragulaService

  ) {
      dragula.drop.subscribe((event) => {
        this.onDrop(event[3])
    });
  }

  onDrop(grandparent) {
    var parentDivs = grandparent.childNodes;
    var folderIds = this.getFolderIds(parentDivs);

    console.log(folderIds);
  }

  getFolderIds(parentDivs) {
    var folderIds = [];

    for(let i = 1; i < parentDivs.length; i++) {
      let folderId = this.getFolderId(parentDivs[i]);
      folderIds.push(folderId);
    }
    return folderIds;
  }

  getFolderId(parentDiv) {
    let div = parentDiv.childNodes[0];
    let divId = div.id;
    let folderId = divId.substring(0, divId.indexOf('-'));
    return folderId;
  }

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

  moveToNoFolder(subscription_id) {
    this.subscriptionManagerService.moveToNoFolder(subscription_id);
  }

  deleteSubscription(subscription_id) {
    this.folderService.deleteSubscription(subscription_id)
      .subscribe(folders => this.folders = folders);
  }
}
