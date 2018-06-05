import { Component, OnInit } from '@angular/core';
import {FolderService} from "../../services/folder.service";

@Component({
  selector: 'app-folder-form',
  templateUrl: './folder-form.component.html',
  styleUrls: ['./folder-form.component.css']
})
export class FolderFormComponent implements OnInit {

  public form = {
    folder_name : null
  }

  constructor(private folderService : FolderService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.folderService.addFolder(this.form);
  }
}
