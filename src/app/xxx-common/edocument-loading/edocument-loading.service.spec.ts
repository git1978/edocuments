import { TestBed } from '@angular/core/testing';

import { EdocumentLoadingService } from './edocument-loading.service';

describe('EdocumentLoadingService', () => {
  let service: EdocumentLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdocumentLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
