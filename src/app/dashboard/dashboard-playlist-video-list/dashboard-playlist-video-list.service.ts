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
      if(localStorage.getItem('videoList')) {
        this.videoListSource.next(JSON.parse(localStorage.getItem('videoList')));
      }
        var videoJSON = this.getVideoJSON(thumbnail_url, video_title);
        this.videoListSource.next(this.videoListSource.value.concat(videoJSON));
  }

  addToVideoListLocalStorage(thumbnail_url, video_title) {
      var videoList = [];
      if(localStorage.getItem('videoList')) {
        videoList = JSON.parse(localStorage.getItem('videoList'));
        var videoJSON = this.getVideoJSON(thumbnail_url, video_title);
        videoList.push(videoJSON);
      } else {
       videoList[0] = this.getVideoJSON(thumbnail_url, video_title);
      }
      localStorage.setItem('videoList', JSON.stringify(videoList));
  }

  private getVideoJSON(thumbnail_url, video_title) {
    var videoJSON = {
      "thumbnail" : thumbnail_url,
      "title" : video_title
    }
    return videoJSON;
  }
}
