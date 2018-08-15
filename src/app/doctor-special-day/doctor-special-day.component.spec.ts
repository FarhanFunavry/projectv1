import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSpecialDayComponent } from './doctor-special-day.component';

describe('DoctorSpecialDayComponent', () => {
  let component: DoctorSpecialDayComponent;
  let fixture: ComponentFixture<DoctorSpecialDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSpecialDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSpecialDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
