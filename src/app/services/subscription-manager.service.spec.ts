import { TestBed, inject } from '@angular/core/testing';

import { SubscriptionManagerService } from './subscription-manager.service';

describe('SubscriptionManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriptionManagerService]
    });
  });

  it('should be created', inject([SubscriptionManagerService], (service: SubscriptionManagerService) => {
    expect(service).toBeTruthy();
  }));
});
