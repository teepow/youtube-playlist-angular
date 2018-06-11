import { TestBed, inject } from '@angular/core/testing';

import { SubscriptionManagerFolderService } from './subscription-manager-folder.service';

describe('SubscriptionManagerFolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriptionManagerFolderService]
    });
  });

  it('should be created', inject([SubscriptionManagerFolderService], (service: SubscriptionManagerFolderService) => {
    expect(service).toBeTruthy();
  }));
});
