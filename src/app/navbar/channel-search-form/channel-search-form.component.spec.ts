import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSearchFormComponent } from './channel-search-form.component';

describe('ChannelSearchFormComponent', () => {
  let component: ChannelSearchFormComponent;
  let fixture: ComponentFixture<ChannelSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
