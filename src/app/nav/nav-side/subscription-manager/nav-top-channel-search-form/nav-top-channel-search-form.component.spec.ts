import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTopChannelSearchFormComponent } from './nav-top-channel-search-form.component';

describe('NavTopChannelSearchFormComponent', () => {
  let component: NavTopChannelSearchFormComponent;
  let fixture: ComponentFixture<NavTopChannelSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTopChannelSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTopChannelSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
