import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorWeekComponent } from './doctor-week.component';

describe('DoctorWeekComponent', () => {
  let component: DoctorWeekComponent;
  let fixture: ComponentFixture<DoctorWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
