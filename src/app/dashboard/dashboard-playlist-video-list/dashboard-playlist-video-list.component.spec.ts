import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPlaylistVideoListComponent } from './dashboard-playlist-video-list.component';

describe('DashboardPlaylistVideoListComponent', () => {
  let component: DashboardPlaylistVideoListComponent;
  let fixture: ComponentFixture<DashboardPlaylistVideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPlaylistVideoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPlaylistVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
