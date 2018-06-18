import { Component, OnInit } from '@angular/core';
import {TreeService} from "../../tree/tree.service";
import {SavePlaylistFormService} from "./save-playlist-form.service"

@Component({
  selector: 'app-save-playlist-form',
  templateUrl: './save-playlist-form.component.html',
  styleUrls: ['./save-playlist-form.component.css']
})
export class SavePlaylistFormComponent implements OnInit {

  public form = {
    playlist_name : null,
    video_ids : null
  }

  constructor(private savePlaylistService : SavePlaylistFormService,
              private treeService : TreeService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    let video_list = JSON.parse(localStorage.getItem('videoList'));
    this.form.video_ids = this.getPlaylistString(video_list);
    this.savePlaylistService.savePlaylist(this.form);
    this.treeService.setTreeNodes();
  }

  private getPlaylistString(video_list) {
    var playList = "";
    for(let i = 0; i < video_list.length; i++) {
      playList += (video_list[i].id + ",");
    }
    return playList;
  }
}
