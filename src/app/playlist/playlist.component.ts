import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  public playList = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/VIDEO_ID?playlist=" + playListService.playList);

  constructor(private playListService: PlaylistService,
              private sanitizer: DomSanitizer
    ) {}

  ngOnInit() {
  }

}
