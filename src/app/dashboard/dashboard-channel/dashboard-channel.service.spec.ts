import { TestBed, inject } from '@angular/core/testing';

import { DashboardChannelService } from './dashboard-channel.service';

describe('DashboardChannelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardChannelService]
    });
  });

  it('should be created', inject([DashboardChannelService], (service: DashboardChannelService) => {
    expect(service).toBeTruthy();
  }));
});
