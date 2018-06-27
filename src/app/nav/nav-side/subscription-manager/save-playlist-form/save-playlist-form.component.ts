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
    playlist_video_ids : null
  }

  constructor(private savePlaylistService : SavePlaylistFormService,
              private treeService : TreeService
    ) { }

  ngOnInit() {
  }

  /**
   * save the playlist name from form and ids from local storage to db
   */
  onSubmit(form) {
    let playlist = JSON.parse(localStorage.getItem('playlist'));
    this.form.playlist_video_ids = this.getPlaylistString(playlist);
    this.savePlaylistService.savePlaylist(this.form);
    this.treeService.setTreeNodes();
  }

  /**
   * parse ids from playlist
   * @param playlist the playlist from local storage
   * @returns {string} the playlist video ids
   */
  private getPlaylistString(playlist) {
    var playlist_video_ids = "";
    for(let i = 0; i < playlist.length; i++) {
      playlist_video_ids += (playlist[i].id + ",");
    }
    return playlist_video_ids;
  }
}
