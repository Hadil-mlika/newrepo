import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLeaveRequestNotificationComponent } from './new-leave-request-notification.component';

describe('NewLeaveRequestNotificationComponent', () => {
  let component: NewLeaveRequestNotificationComponent;
  let fixture: ComponentFixture<NewLeaveRequestNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLeaveRequestNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLeaveRequestNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
