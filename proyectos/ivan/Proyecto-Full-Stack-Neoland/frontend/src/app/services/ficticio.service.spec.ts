import { TestBed } from '@angular/core/testing';

import { FicticioService } from './ficticio.service';

describe('FicticioService', () => {
  let service: FicticioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicticioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
