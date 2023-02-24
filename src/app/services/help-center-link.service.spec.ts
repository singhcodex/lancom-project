import { TestBed } from '@angular/core/testing';

import { HelpCenterLinkService } from './help-center-link.service';

describe('HelpCenterLinkService', () => {
  let service: HelpCenterLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpCenterLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
