import { TestBed } from '@angular/core/testing';

import { MapControllerService } from './map-controller.service';

describe('MapControllerService', () => {
  let service: MapControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
