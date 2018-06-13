import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {TreeNode} from 'primeng/api';

import {DashboardVideoService} from "../../../dashboard/dashboard-videos/dashboard-video.service";
import {TreeService} from "../tree/tree.service";
import {SubscriptionManagerFolderService} from "./subscription-manager-folders/subscription-manager-folder.service";
import {SubscriptionManagerSubscriptionService} from "./subscription-manager-subscriptions/subscription-manager-subscription.service"

@Component({
  selector: 'app-subscription-manager',
  templateUrl: './subscription-manager.component.html',
  styleUrls: ['./subscription-manager.component.css']
})

export class SubscriptionManagerComponent implements OnInit {

  treeNodes : TreeNode[];

  constructor(private router: Router,
              private treeService : TreeService,
              private folderService: SubscriptionManagerFolderService,
              private subscriptionService: SubscriptionManagerSubscriptionService,
              private videoService: DashboardVideoService
  ) { }

  ngOnInit() {
    this.treeService.treeNodesSource.subscribe((treeNodes) => {
       this.treeNodes = treeNodes;
    });

    this.treeService.setTreeNodes();
  }

  nodeSelect(event) {
    var data = event.node.data;
    var action = data.action;

    switch(action) {
        case "delete folder":
            this.deleteFolder(data.id);
            break;
        case "delete subscription":
            this.deleteSubscription(data.id);
            break;
        case "move":
            this.moveToFolder(data.sub_id, data.folder_id);
            break;
        case "move to default":
            this.moveToNoFolder(data.id);
            break
        case "play":
             this.showVideos(data.id);
            break;
        default:
            console.log("not an option");
    }
  }

  deleteFolder(folder_id) {
    this.folderService.deleteFolder(folder_id);
    this.treeService.setTreeNodes();
  }

  deleteSubscription(subscription_id) {
    this.subscriptionService.deleteSubscription(subscription_id);
    this.treeService.setTreeNodes();
  }

  moveToFolder(subscription_id, folder_id) {
    this.subscriptionService.moveToFolder(subscription_id, folder_id);
    this.treeService.setTreeNodes();
  }

  moveToNoFolder(subscription_id) {
    this.subscriptionService.moveToNoFolder(subscription_id);
    this.treeService.setTreeNodes();
  }

  showVideos(subscription_id) {
    this.videoService.showVideos(subscription_id);
    this.router.navigateByUrl('/videos');
  }

}
