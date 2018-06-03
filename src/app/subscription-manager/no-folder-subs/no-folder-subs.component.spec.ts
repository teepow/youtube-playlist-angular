import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFolderSubsComponent } from './no-folder-subs.component';

describe('NoFolderSubsComponent', () => {
  let component: NoFolderSubsComponent;
  let fixture: ComponentFixture<NoFolderSubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoFolderSubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFolderSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
