import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class DashboardPlaylistVideoListService {

  private videoListSource: BehaviorSubject<any> = new BehaviorSubject([]);

  videoList = this.videoListSource.asObservable();

  constructor() { }

  addToVideoList(thumbnail_url, video_title, video_id) {
      var videoList = [];
      if(this.listIsInStorage()) {
        videoList = this.getListFromStorage();
        this.videoListSource.next(videoList);
      }
        let videoJSON = this.getVideoJSON(thumbnail_url, video_title, videoList.length, video_id);
        this.videoListSource.next(this.videoListSource.value.concat(videoJSON));
  }

  addToVideoListLocalStorage(thumbnail_url, video_title, video_id) {
      var videoList = [];
      if(this.listIsInStorage()) {
        videoList = this.getListFromStorage();
        let videoJSON = this.getVideoJSON(thumbnail_url, video_title, videoList.length, video_id);
        videoList.push(videoJSON);
      } else {
       videoList[0] = this.getVideoJSON(thumbnail_url, video_title, videoList.length, video_id);
      }
      localStorage.setItem('videoList', JSON.stringify(videoList));
  }

  private listIsInStorage() {
    return !!localStorage.getItem('videoList');
  }

  public getListFromStorage() {
    return JSON.parse(localStorage.getItem('videoList'));
  }

  public removeFromObservable(index) {
    this.videoListSource.next(this.getListFromStorage());
  }

  private getVideoJSON(thumbnail_url, video_title, index, video_id) {
    let videoJSON = {
      "thumbnail" : thumbnail_url,
      "title" : video_title,
      "id" : video_id,
      "index" : index
    }
    return videoJSON;
  }
}
