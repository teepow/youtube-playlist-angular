import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Playlist} from './playlist';

@Injectable({
  providedIn: 'root'
})
export class SavePlaylistFormService {

  private playlistBaseUrl = 'http://youtubeplaylist-laravel.tompowers.website/playlists';

  constructor(private http: HttpClient) {}

  savePlaylist(form) {
    this.http.post(this.playlistBaseUrl, form)
      .subscribe(response => console.log(response));
  }

  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.playlistBaseUrl);
  }

  deletePlaylist(playlist_id): Observable<any>  {
    return this.http.delete(this.playlistBaseUrl + '/' + playlist_id);
  }
}
