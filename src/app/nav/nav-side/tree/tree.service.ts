import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {TreeNode} from 'primeng/api';

import { SubscriptionManagerFolder } from '../subscription-manager/subscription-manager-folders/subscription-manager-folder';
import { SubscriptionManagerSubscription } from '../subscription-manager/subscription-manager-subscriptions/subscription-manager-subscription';

import {SubscriptionManagerSubscriptionService} from "../subscription-manager/subscription-manager-subscriptions/subscription-manager-subscription.service";
import {SubscriptionManagerFolderService} from "../subscription-manager/subscription-manager-folders/subscription-manager-folder.service";
@Injectable({
  providedIn: 'root'
})
export class TreeService {

  private folders : SubscriptionManagerFolder[];
  private subscriptions : SubscriptionManagerSubscription[];

  treeNodesSource: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private subscriptionService: SubscriptionManagerSubscriptionService,
              private folderService: SubscriptionManagerFolderService
    ) { }

  public setTreeNodes() {
    this.folderService.getFolders()
      .subscribe(folders => {
          this.folders = folders;
          this.subscriptionService.getNoFolderSubscriptions()
              .subscribe(noFolderSubscriptions => {
                  var folderTreeNodes = this.getFolderTreeNodes(folders);
                  var subTreeNodes = this.getSubTreeNodes(noFolderSubscriptions);
                  var treeNodes = folderTreeNodes.concat(subTreeNodes);
                  this.treeNodesSource.next(treeNodes);
          });
    });
  }

  private getFolderTreeNodes(folders){
    var folderTreeNodes = [];
    for(let i = 0; i < folders.length; i++) {
      var folderTreeNode = this.getFolderTreeNode(folders[i]);
      folderTreeNodes.push(folderTreeNode);
    }
    return folderTreeNodes;
  }

  private getFolderTreeNode(folder): TreeNode {
    var subscriptions = this.getSubTreeNodes(folder.subscriptions);
    var folderTreeNode = {
      "label" : folder.name,
      "data": "folder",
      "expandedIcon": "fa fa-folder-open",
      "collapsedIcon": "fa fa-folder",
      "selectable": false,
      "children" : subscriptions.concat(
          [{"label": "delete folder",
            "data" : {"action": "delete folder", "id": folder.id},
           "icon": "fa fa-trash"}])
    };
    return folderTreeNode;
  }

  private getSubTreeNodes(subscriptions): TreeNode[] {
    var subTreeNodes = [];
    for(let i = 0; i < subscriptions.length; i++) {
      var subTreeNode = this.getSubTreeNode(subscriptions[i]);
      subTreeNodes.push(subTreeNode);
    }
    return subTreeNodes;
  }

  private getSubTreeNode(subscription): TreeNode {
    var subChildren = this.getSubChildren(subscription);
    var subTreeNode = {
      "label" : subscription.title,
      "expandedIcon": "fa fa-youtube",
      "collapsedIcon": "fa fa-youtube",
      "selectable": false,
      "children" : subChildren
    };
    return subTreeNode;
  }

  private getSubChildren(subscription): TreeNode[] {
    var moveToFolderNodes = this.getMoveToFolderNodes(subscription.id);
    var subChildren = [
      {
        "label" : "play videos",
        "data": {"action": "play", "id": subscription.id},
        "icon" : "fa fa-youtube-play"
      },
      {
        "label" : "delete subscription",
        "data": { "action": "delete subscription", "id": subscription.id},
        "icon" : "fa fa-trash"
      },
      {
        "label" : "move to folder",
        "icon" : "fa fa-suitcase",
        "selectable": false,
        "children" : [{
          "label" : "Default",
          "data": {"action": "move to default", "id": subscription.id},
          "icon": "fa fa-truck"
        }].concat(moveToFolderNodes)
      },
    ]
    return subChildren;
  }

  private getMoveToFolderNodes(subscription_id) {
      var moveToFolderNodes = [];
      for(let i = 0; i < this.folders.length; i++) {
          var moveToFolderNode = this.getMoveToFolderNode(this.folders[i], subscription_id);
          moveToFolderNodes.push(moveToFolderNode);
      }
      return moveToFolderNodes;
  }

  private getMoveToFolderNode(folder, subscription_id) {
      var moveToFolderNode = {
          "label": folder.name,
          "data":
              {
                  "action": "move",
                  "sub_id": subscription_id,
                  "folder_id": folder.id
              },
          "icon": "fa fa-truck"
      }
      return moveToFolderNode;
  }
}
