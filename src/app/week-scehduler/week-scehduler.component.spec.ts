import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekScehdulerComponent } from './week-scehduler.component';

describe('WeekScehdulerComponent', () => {
  let component: WeekScehdulerComponent;
  let fixture: ComponentFixture<WeekScehdulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekScehdulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekScehdulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
