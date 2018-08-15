import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDayComponent } from './doctor-day.component';

describe('DoctorDayComponent', () => {
  let component: DoctorDayComponent;
  let fixture: ComponentFixture<DoctorDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
