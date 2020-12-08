import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitysuccessComponent } from './activitysuccess.component';

describe('ActivitysuccessComponent', () => {
  let component: ActivitysuccessComponent;
  let fixture: ComponentFixture<ActivitysuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitysuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitysuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
