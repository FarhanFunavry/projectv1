import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthSchedulerComponent } from './month-scheduler.component';

describe('MonthSchedulerComponent', () => {
  let component: MonthSchedulerComponent;
  let fixture: ComponentFixture<MonthSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
