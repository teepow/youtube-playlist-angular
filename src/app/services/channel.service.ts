import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private channelSource: BehaviorSubject<any> = new BehaviorSubject([]);

  channel = this.channelSource.asObservable();

  private channelBaseUrl = 'http://127.0.0.1:8000/channels';

  constructor(private http: HttpClient) {}

  getChannel(form) {
  	return this.http.post(this.channelBaseUrl, form);
  }

  changeChannel(response) {
    this.channelSource.next(response);
  }

  storeChannelInLocalStorage(response) {
    var channel = JSON.stringify(response);
    localStorage.removeItem('channel');
    localStorage.setItem('channel', channel);
  }
}
