import { Component, OnInit } from '@angular/core';
import {SubscriptionManagerService} from "../services/subscription-manager.service";

@Component({
  selector: 'app-folder-form',
  templateUrl: './folder-form.component.html',
  styleUrls: ['./folder-form.component.css']
})
export class FolderFormComponent implements OnInit {

  public form = {
    folder_name : null
  }

  constructor(private subscriptionManagerService : SubscriptionManagerService) { }

  ngOnInit() {
  }

  onSubmit() {
  console.log(this.form);
  this.subscriptionManagerService.addFolder(this.form);
  }
}
