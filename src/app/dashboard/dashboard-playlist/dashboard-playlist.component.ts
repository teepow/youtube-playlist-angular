import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl  } from '@angular/platform-browser';


@Component({
  selector: 'app-playlist',
  templateUrl: './dashboard-playlist.component.html',
  styleUrls: ['./dashboard-playlist.component.css']
})
export class DashboardPlaylistComponent implements OnInit {

  public playlist_url : SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * get playlist video ids from local storage
    */
  ngOnInit() {
      this.playlist_url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/VIDEO_ID?playlist=" + localStorage.getItem('playlist_video_ids'));
  }
}
