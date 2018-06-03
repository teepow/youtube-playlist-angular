import { Component, OnInit } from '@angular/core';

import { Folder } from '../../folder';
import { FolderService } from '../../services/folder.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

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
