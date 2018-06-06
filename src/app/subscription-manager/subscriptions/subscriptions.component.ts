import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "../../models/subscription";
import {FolderService} from "../../services/folder.service";
import {Folder} from "../../models/folder";
import {SubscriptionManagerService} from "../../services/subscription-manager.service";
import {VideoService} from "../../services/video.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  @Input() subscription: Subscription;

  @Input() folders : Folder[];

  constructor(private folderService: FolderService,
              private subscriptionManagerService: SubscriptionManagerService,
              private videoService: VideoService,
              private router: Router
              ) { }

  ngOnInit() {
  }

  moveToFolder(subscription_id, folder_id) {
    this.subscriptionManagerService.moveToFolder(subscription_id, folder_id);
  }

  moveToNoFolder(subscription_id) {
    this.subscriptionManagerService.moveToNoFolder(subscription_id);
  }

  deleteSubscription(subscription_id) {
    this.subscriptionManagerService.deleteSubscription(subscription_id);
  }

  showVideos(subscription_id) {
    this.videoService.showVideos(subscription_id);
    this.router.navigateByUrl('/videos');
  }
}
