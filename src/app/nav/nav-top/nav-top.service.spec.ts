import { TestBed, inject } from '@angular/core/testing';

import { NavTopService } from './nav-top.service';

describe('NavTopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavTopService]
    });
  });

  it('should be created', inject([NavTopService], (service: NavTopService) => {
    expect(service).toBeTruthy();
  }));
});
