import { TestBed, inject } from '@angular/core/testing';

import { DatePickerserviceService } from './date-pickerservice.service';

describe('DatePickerserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatePickerserviceService]
    });
  });

  it('should be created', inject([DatePickerserviceService], (service: DatePickerserviceService) => {
    expect(service).toBeTruthy();
  }));
});
