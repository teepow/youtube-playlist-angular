import { Component, OnInit } from '@angular/core';

import { Folder } from '../models/folder';
import { FolderService } from '../services/folder.service';

@Component({
  selector: 'app-subscription-manager',
  templateUrl: './subscription-manager.component.html',
  styleUrls: ['./subscription-manager.component.css']
})

export class SubscriptionManagerComponent implements OnInit {
  folders : Folder[];

  constructor(private folderService: FolderService) { }

  ngOnInit() {
    this.getFolders();
  }

  getFolders(): void {
    this.folderService.getFolders()
      .subscribe(folders => this.folders = folders);
  }

}
