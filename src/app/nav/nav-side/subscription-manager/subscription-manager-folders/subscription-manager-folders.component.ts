import { Component, OnInit } from '@angular/core';
import { SubscriptionManagerFolderService } from './subscription-manager-folder.service';

@Component({
  selector: 'app-folders',
  templateUrl: './subscription-manager-folders.component.html',
  styleUrls: ['./subscription-manager-folders.component.css']
})
export class SubscriptionManagerFoldersComponent implements OnInit {

  constructor(private folderService: SubscriptionManagerFolderService
  ) {}

  ngOnInit() {
  }
}
