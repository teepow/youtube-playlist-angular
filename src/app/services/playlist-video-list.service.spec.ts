import { TestBed, inject } from '@angular/core/testing';

import { PlaylistVideoListService } from './playlist-video-list.service';

describe('PlaylistVideoListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaylistVideoListService]
    });
  });

  it('should be created', inject([PlaylistVideoListService], (service: PlaylistVideoListService) => {
    expect(service).toBeTruthy();
  }));
});
