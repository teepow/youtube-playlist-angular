import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistVideoListComponent } from './playlist-video-list.component';

describe('PlaylistVideoListComponent', () => {
  let component: PlaylistVideoListComponent;
  let fixture: ComponentFixture<PlaylistVideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistVideoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
