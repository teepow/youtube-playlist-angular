import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {TreeNode} from 'primeng/api';
import {Router} from "@angular/router";

import {AuthStatusService} from "../../../auth/auth-status.service"
import {TokenService} from "../../../auth/token/token.service";


import { SubscriptionManagerFolder } from '../subscription-manager/subscription-manager-folders/subscription-manager-folder';
import { SubscriptionManagerSubscription } from '../subscription-manager/subscription-manager-subscriptions/subscription-manager-subscription';
import {SubscriptionManagerSubscriptionService} from "../subscription-manager/subscription-manager-subscriptions/subscription-manager-subscription.service";
import {SubscriptionManagerFolderService} from "../subscription-manager/subscription-manager-folders/subscription-manager-folder.service";
import {SavePlaylistFormService} from '../subscription-manager/save-playlist-form/save-playlist-form.service';
import {Playlist} from '../subscription-manager/save-playlist-form/playlist';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  private folders : SubscriptionManagerFolder[];
  private subscriptions : SubscriptionManagerSubscription[];

  treeNodesSource: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private subscriptionService: SubscriptionManagerSubscriptionService,
              private folderService: SubscriptionManagerFolderService,
              private router : Router,
              private authStatus: AuthStatusService,
              private tokenService : TokenService,
              private savePlaylistService : SavePlaylistFormService
    ) { }

  public setTreeNodes() {
    this.folderService.getFolders()
      .subscribe(folders => {
          this.folders = folders;
          this.subscriptionService.getNoFolderSubscriptions()
              .subscribe(noFolderSubscriptions => {
                this.savePlaylistService.getPlaylists()
                  .subscribe(playlists => {
                  let treeNodes = this.getTreeNodes(folders, noFolderSubscriptions, playlists);
                  this.treeNodesSource.next(treeNodes);
                  });
          });
    },
    error => {if(error.error.message == "Token has expired") this.logout()}
    );
  }

  private getTreeNodes(folders, noFolderSubscriptions, playlists) {
    let folderTreeNodes = this.getFolderTreeNodes(folders);
    let subTreeNodes = this.getSubTreeNodes(noFolderSubscriptions);
    let playlistNodes = this.getPlaylistNodes(playlists);
    let treeNodes = folderTreeNodes.concat(subTreeNodes).concat(playlistNodes);
    return treeNodes;
  }

  private getFolderTreeNodes(folders) : TreeNode[]{
    var folderTreeNodes = [];
    for(let i = 0; i < folders.length; i++) {
      var folderTreeNode = this.getFolderTreeNode(folders[i]);
      folderTreeNodes.push(folderTreeNode);
    }
    return folderTreeNodes;
  }

  private getFolderTreeNode(folder): TreeNode {
    let subscriptions = this.getSubTreeNodes(folder.subscriptions);
    let folderTreeNode = {
      "label" : folder.name,
      "data": "folder",
      "expandedIcon": "fa fa-folder-open",
      "collapsedIcon": "fa fa-folder",
      "selectable": false,
      "children" : subscriptions.concat(
          [{"label": "delete folder",
            "data" : {"action": "delete folder", "folder_id": folder.id},
           "icon": "fa fa-trash"}])
    };
    return folderTreeNode;
  }

  private getSubTreeNodes(subscriptions): TreeNode[] {
    var subTreeNodes = [];
    for(let i = 0; i < subscriptions.length; i++) {
      let subTreeNode = this.getSubTreeNode(subscriptions[i]);
      subTreeNodes.push(subTreeNode);
    }
    return subTreeNodes;
  }

  private getSubTreeNode(subscription): TreeNode {
    let subChildren = this.getSubChildren(subscription);
    let subTreeNode = {
      "label" : subscription.title,
      "expandedIcon": "fa fa-youtube",
      "collapsedIcon": "fa fa-youtube",
      "selectable": false,
      "children" : subChildren
    };
    return subTreeNode;
  }

  private getSubChildren(subscription): TreeNode[] {
    let moveToFolderNodes = this.getMoveToFolderNodes(subscription.id);
    let subChildren = [
      {
        "label" : "show videos",
        "data": {"action": "show videos", "sub_id": subscription.id},
        "icon" : "fa fa-youtube-play"
      },
      {
        "label" : "delete subscription",
        "data": { "action": "delete subscription", "sub_id": subscription.id},
        "icon" : "fa fa-trash"
      },
      {
        "label" : "move to folder",
        "icon" : "fa fa-suitcase",
        "selectable": false,
        "children" : [{
          "label" : "Default",
          "data": {"action": "move to default", "sub_id": subscription.id},
          "icon": "fa fa-truck"
        }].concat(moveToFolderNodes)
      },
    ]
    return subChildren;
  }

  private getMoveToFolderNodes(subscription_id) {
      var moveToFolderNodes = [];
      for(let i = 0; i < this.folders.length; i++) {
          let moveToFolderNode = this.getMoveToFolderNode(this.folders[i], subscription_id);
          moveToFolderNodes.push(moveToFolderNode);
      }
      return moveToFolderNodes;
  }

  private getMoveToFolderNode(folder, subscription_id) {
      let moveToFolderNode = {
          "label": folder.name,
          "data":
              {
                  "action": "move",
                  "sub_id": subscription_id,
                  "folder_id": folder.id
              },
          "icon": "fa fa-truck",
      }
      return moveToFolderNode;
  }

  private getPlaylistNodes(playlists) : TreeNode {
    var playlistTreeNodes = [];
    for(let i = 0; i < playlists.length; i++) {
      let playlistTreeNode = this.getPlaylistTreeNode(playlists[i]);
      playlistTreeNodes.push(playlistTreeNode);
    }
    return {"label": "playlists","selectable": false, "children": playlistTreeNodes};
  }

  private getPlaylistTreeNode(playlist): TreeNode {
    let playlistChildren = this.getPlaylistChildren(playlist);
    let playlistTreeNode = {
      "label": playlist.name,
      "expandedIcon": "fa fa-film",
      "collapsedIcon": "fa fa-film",
      "selectable": false,
      "children": playlistChildren
    }
    return playlistTreeNode;
  }

  private getPlaylistChildren(playlist) {
    let playlistChildren = [
      {
      "label": "play",
      "data": {"action": "play playlist", "video_ids": playlist.video_ids},
      "icon": "fa fa-youtube-play"
      },
      {
        "label": "delete",
        "data": {"action": "delete playlist", "playlist_id": playlist.id},
        "icon": "fa fa-trash"
      }
    ];
    return playlistChildren;
  }

  private logout() {
    this.authStatus.changeStatus(false);
    this.tokenService.removeToken();
    this.router.navigateByUrl("/login");
  }
}
