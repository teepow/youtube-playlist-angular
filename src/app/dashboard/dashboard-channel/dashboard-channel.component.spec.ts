import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChannelComponent } from './dashboard-channel.component';

describe('DashboardChannelComponent', () => {
  let component: DashboardChannelComponent;
  let fixture: ComponentFixture<DashboardChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
