import { TestBed, inject } from '@angular/core/testing';

import { AjaxRequestServiceService } from './ajax-request-service.service';

describe('AjaxRequestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjaxRequestServiceService]
    });
  });

  it('should be created', inject([AjaxRequestServiceService], (service: AjaxRequestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
