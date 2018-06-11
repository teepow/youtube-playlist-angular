import { TestBed, inject } from '@angular/core/testing';

import { DashboardPlaylistService } from './dashboard-playlist.service';

describe('DashboardPlaylistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardPlaylistService]
    });
  });

  it('should be created', inject([DashboardPlaylistService], (service: DashboardPlaylistService) => {
    expect(service).toBeTruthy();
  }));
});
