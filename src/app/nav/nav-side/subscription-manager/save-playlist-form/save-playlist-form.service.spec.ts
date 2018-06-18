import { TestBed, inject } from '@angular/core/testing';

import { SavePlaylistFormService } from './save-playlist-form.service';

describe('SavePlaylistFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavePlaylistFormService]
    });
  });

  it('should be created', inject([SavePlaylistFormService], (service: SavePlaylistFormService) => {
    expect(service).toBeTruthy();
  }));
});
