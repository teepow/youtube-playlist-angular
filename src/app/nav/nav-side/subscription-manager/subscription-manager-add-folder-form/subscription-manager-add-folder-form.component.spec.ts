import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionManagerAddFolderFormComponent } from './subscription-manager-add-folder-form.component';

describe('SubscriptionManagerAddFolderFormComponent', () => {
  let component: SubscriptionManagerAddFolderFormComponent;
  let fixture: ComponentFixture<SubscriptionManagerAddFolderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionManagerAddFolderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionManagerAddFolderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
