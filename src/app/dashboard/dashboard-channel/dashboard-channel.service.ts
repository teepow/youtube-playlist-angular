import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class DashboardChannelService {

  private channelSource: BehaviorSubject<any> = new BehaviorSubject([]);

  //Subscribed to by channel component
  channel = this.channelSource.asObservable();

  private channelBaseUrl = 'http://youtubeplaylist-laravel.tompowers.website/channels';

  constructor(private http: HttpClient) {}

  /**
   * get channel info from YouTube via server
   * @param form channel search form
   * @returns {Observable<Object>}
   */
  getChannel(form) {
  	return this.http.post(this.channelBaseUrl, form);
  }

  /**
   * update current channel in behaviorsubject
   * @param new_channel the new channel
   */
  changeChannel(new_channel) {
    this.channelSource.next(new_channel);
  }

  /**
   * update current channel in local storage
   * @param new_channel the new channel
   */
  storeChannelInLocalStorage(new_channel) {
    var channel = JSON.stringify(new_channel);
    localStorage.removeItem('channel');
    localStorage.setItem('channel', channel);
  }
}
