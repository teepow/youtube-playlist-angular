import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class NavTopService {

  private showPlaylist = new BehaviorSubject<boolean>(true);

  status = this.showPlaylist.asObservable();

  constructor() { }

  togglePlaylist() {
      this.showPlaylist.next(!this.showPlaylist.value);
  }
}
