import { TestBed, inject } from '@angular/core/testing';

import { DashboardPlaylistVideoListService } from './dashboard-playlist-video-list.service';

describe('DashboardPlaylistVideoListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardPlaylistVideoListService]
    });
  });

  it('should be created', inject([DashboardPlaylistVideoListService], (service: DashboardPlaylistVideoListService) => {
    expect(service).toBeTruthy();
  }));
});
