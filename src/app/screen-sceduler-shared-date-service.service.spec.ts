import { TestBed, inject } from '@angular/core/testing';

import { ScreenScedulerSharedDateServiceService } from './screen-sceduler-shared-date-service.service';

describe('ScreenScedulerSharedDateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScreenScedulerSharedDateServiceService]
    });
  });

  it('should be created', inject([ScreenScedulerSharedDateServiceService], (service: ScreenScedulerSharedDateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
