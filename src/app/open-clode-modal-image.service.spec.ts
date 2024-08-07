import { TestBed } from '@angular/core/testing';

import { OpenClodeModalImageService } from './open-clode-modal-image.service';

describe('OpenClodeModalImageService', () => {
  let service: OpenClodeModalImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenClodeModalImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
