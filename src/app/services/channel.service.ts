import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  channelSource: BehaviorSubject<any> = new BehaviorSubject([]);

  private youtubeBaseUrl = 'http://127.0.0.1:8000/youtube';

  constructor(private http: HttpClient) {}

  getChannel(form) {
  	this.http.post(this.youtubeBaseUrl, form)
      .subscribe((channel) => this.channelSource.next(channel));
  }
}
