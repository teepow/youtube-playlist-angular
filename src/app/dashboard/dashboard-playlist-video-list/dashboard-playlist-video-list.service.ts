import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class DashboardPlaylistVideoListService {

  private videoListSource: BehaviorSubject<any> = new BehaviorSubject([]);

  videoList = this.videoListSource.asObservable();

  constructor() { }

  addToVideoList(thumbnail_url, video_title) {
        var videoJSON = this.getVideoJSON(thumbnail_url, video_title);
        this.videoListSource.next(this.videoListSource.value.concat(videoJSON));
  }

  addToVideoListLocalStorage(thumbnail_url, video_title) {
      var thumbnail_urls = [];
      if(localStorage.getItem('thumbnail_urls')) {
        thumbnail_urls = JSON.parse(localStorage.getItem('thumbnail_urls'));
        thumbnail_urls.push(thumbnail_url);
      } else {
       thumbnail_urls[0] = thumbnail_url;
      }
      localStorage.setItem('thumbnail_urls', JSON.stringify(thumbnail_urls));
      console.log("set");
  }

  private getVideoJSON(thumbnail_url, video_title) {
    var videoJSON = {
      "thumbnail" : thumbnail_url,
      "title" : video_title
    }
    return videoJSON;
  }
}
