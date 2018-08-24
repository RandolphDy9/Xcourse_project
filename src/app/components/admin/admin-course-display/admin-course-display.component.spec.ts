import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseDisplayComponent } from './admin-course-display.component';

describe('AdminCourseDisplayComponent', () => {
  let component: AdminCourseDisplayComponent;
  let fixture: ComponentFixture<AdminCourseDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
