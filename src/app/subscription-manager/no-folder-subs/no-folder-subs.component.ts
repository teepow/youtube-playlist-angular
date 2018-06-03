import { Component, OnInit } from '@angular/core';
import {Subscription} from "../../models/subscription";
import {SubscriptionService} from "../../services/subscription.service";

@Component({
  selector: 'app-no-folder-subs',
  templateUrl: './no-folder-subs.component.html',
  styleUrls: ['./no-folder-subs.component.css']
})
export class NoFolderSubsComponent implements OnInit {

  noFolderSubscriptions : Subscription[];

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.getFolders();
  }

  getFolders(): void {
    this.subscriptionService.getNoFolderSubscriptions()
      .subscribe(noFolderSubscriptions => this.noFolderSubscriptions = noFolderSubscriptions);
  }
}
