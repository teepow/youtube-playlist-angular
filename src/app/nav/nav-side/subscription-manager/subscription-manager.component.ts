import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {TreeNode} from 'primeng/api';

import {DashboardVideoService} from "../../../dashboard/dashboard-videos/dashboard-video.service";
import {TreeService} from "../tree/tree.service";
import {SubscriptionManagerFolderService} from "./subscription-manager-folders/subscription-manager-folder.service";
import {SubscriptionManagerSubscriptionService} from "./subscription-manager-subscriptions/subscription-manager-subscription.service"
import {SavePlaylistFormService} from "./save-playlist-form/save-playlist-form.service";

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
              private videoService: DashboardVideoService,
              private savePlaylistService: SavePlaylistFormService
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
            this.deleteFolder(data.folder_id);
            break;
        case "delete subscription":
            this.deleteSubscription(data.sub_id);
            break;
        case "move":
            this.moveToFolder(data.sub_id, data.folder_id);
            break;
        case "move to default":
            this.moveToNoFolder(data.sub_id);
            break
        case "show videos":
             this.showVideos(data.sub_id);
            break;
        case "play playlist":
             this.playPlaylist(data.video_ids);
            break;
        case "delete playlist":
             this.deletePlaylist(data.playlist_id);
            break;
        default:
            console.log("not an option");
    }
  }

  deleteFolder(folder_id) {
    this.folderService.deleteFolder(folder_id)
      .subscribe(response => this.treeService.setTreeNodes())
  }

  deleteSubscription(subscription_id) {
    this.subscriptionService.deleteSubscription(subscription_id)
      .subscribe(response => this.treeService.setTreeNodes())
  }

  moveToFolder(subscription_id, folder_id) {
    this.subscriptionService.moveToFolder(subscription_id, folder_id)
      .subscribe(response => this.treeService.setTreeNodes())
  }

  moveToNoFolder(subscription_id) {
    this.subscriptionService.moveToNoFolder(subscription_id)
      .subscribe(response => this.treeService.setTreeNodes())
  }

  showVideos(subscription_id) {
    this.videoService.showVideos(subscription_id);
    this.router.navigateByUrl('/videos');
  }

  playPlaylist(video_ids) {
      localStorage.setItem('playlist_video_ids', video_ids);
      this.router.navigateByUrl('/playlist');
  }

  deletePlaylist(playlist_id) {
    this.savePlaylistService.deletePlaylist(playlist_id)
      .subscribe(response => this.treeService.setTreeNodes())
  }

}
