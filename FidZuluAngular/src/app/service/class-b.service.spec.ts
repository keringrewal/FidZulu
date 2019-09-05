import { TestBed } from '@angular/core/testing';

import { ClassBService } from './class-b.service';

describe('ClassBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassBService = TestBed.get(ClassBService);
    expect(service).toBeTruthy();
  });
});
