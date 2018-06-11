import { TestBed, inject } from '@angular/core/testing';

import { SubscriptionManagerSubscriptionService } from './subscription-manager-subscription.service';

describe('SubscriptionManagerSubscriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriptionManagerSubscriptionService]
    });
  });

  it('should be created', inject([SubscriptionManagerSubscriptionService], (service: SubscriptionManagerSubscriptionService) => {
    expect(service).toBeTruthy();
  }));
});
