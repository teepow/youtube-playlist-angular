import { TestBed, inject } from '@angular/core/testing';

import { DashboardVideoService } from './dashboard-video.service';

describe('DashboardVideoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardVideoService]
    });
  });

  it('should be created', inject([DashboardVideoService], (service: DashboardVideoService) => {
    expect(service).toBeTruthy();
  }));
});
