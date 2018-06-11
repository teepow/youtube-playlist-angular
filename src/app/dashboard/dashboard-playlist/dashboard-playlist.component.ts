import { Component, OnInit } from '@angular/core';
import { DashboardPlaylistService } from './dashboard-playlist.service';
import { DomSanitizer,SafeResourceUrl  } from '@angular/platform-browser';


@Component({
  selector: 'app-playlist',
  templateUrl: './dashboard-playlist.component.html',
  styleUrls: ['./dashboard-playlist.component.css']
})
export class DashboardPlaylistComponent implements OnInit {

  public playList : SafeResourceUrl;

  constructor(private playListService: DashboardPlaylistService,
              private sanitizer: DomSanitizer,
    ) {}

  ngOnInit() {
      this.playList = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/VIDEO_ID?playlist=" + localStorage.getItem('playList'));
  }
}
