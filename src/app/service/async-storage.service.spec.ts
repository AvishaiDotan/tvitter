import { TestBed } from '@angular/core/testing';

import { AsyncLocalStorageService } from './async-storage.service';

describe('AsyncStorageService', () => {
  let service: AsyncLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
