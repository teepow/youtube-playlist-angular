import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  channelSource: BehaviorSubject<any> = new BehaviorSubject([]);

  private channelBaseUrl = 'http://127.0.0.1:8000/channels';

  constructor(private http: HttpClient) {}

  getChannel(form) {
  	this.http.post(this.channelBaseUrl, form)
      .subscribe((channel) => this.channelSource.next(channel));
  }
}
