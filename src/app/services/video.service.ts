import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

   videosSource: BehaviorSubject<any> = new BehaviorSubject([]);

  private videosBaseUrl = "http://127.0.0.1:8000/videos";

  constructor(private http: HttpClient) { }

  showVideos(subscription_id) {
      this.http.get(this.videosBaseUrl + '/' + subscription_id)
      .subscribe(response => this.videosSource.next(response));
  }
}
