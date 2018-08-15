import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMonthComponent } from './doctor-month.component';

describe('DoctorMonthComponent', () => {
  let component: DoctorMonthComponent;
  let fixture: ComponentFixture<DoctorMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
