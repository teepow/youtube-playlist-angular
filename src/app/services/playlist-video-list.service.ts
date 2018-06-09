import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class PlaylistVideoListService {

  private videoListSource: BehaviorSubject<any> = new BehaviorSubject([]);

  videoList = this.videoListSource.asObservable();

  constructor() { }

  addToVideoList(thumbnail_url) {
        this.videoListSource.next(this.videoListSource.value.concat(thumbnail_url));
  }

  addToVideoListLocalStorage(thumbnail_url) {
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
}
