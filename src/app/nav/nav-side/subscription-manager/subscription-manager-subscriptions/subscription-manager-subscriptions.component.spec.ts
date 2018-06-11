import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionManagerSubscriptionsComponent } from './subscription-manager-subscriptions.component';

describe('SubscriptionManagerSubscriptionsComponent', () => {
  let component: SubscriptionManagerSubscriptionsComponent;
  let fixture: ComponentFixture<SubscriptionManagerSubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionManagerSubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionManagerSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
