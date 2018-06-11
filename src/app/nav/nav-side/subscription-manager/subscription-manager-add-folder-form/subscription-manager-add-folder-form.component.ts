import { Component, OnInit } from '@angular/core';
import {SubscriptionManagerFolderService} from "../subscription-manager-folders/subscription-manager-folder.service";

@Component({
  selector: 'app-folder-form',
  templateUrl: './subscription-manager-add-folder-form.component.html',
  styleUrls: ['./subscription-manager-add-folder-form.component.css']
})
export class SubscriptionManagerAddFolderFormComponent implements OnInit {

  public form = {
    folder_name : null
  }

  constructor(private folderService : SubscriptionManagerFolderService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.folderService.addFolder(this.form);
  }
}
