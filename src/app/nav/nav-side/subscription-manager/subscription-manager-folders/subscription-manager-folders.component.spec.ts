import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionManagerFoldersComponent } from './subscription-manager-folders.component';

describe('SubscriptionManagerFoldersComponent', () => {
  let component: SubscriptionManagerFoldersComponent;
  let fixture: ComponentFixture<SubscriptionManagerFoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionManagerFoldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionManagerFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
