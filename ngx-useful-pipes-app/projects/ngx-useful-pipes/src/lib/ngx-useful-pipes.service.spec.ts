import { TestBed } from '@angular/core/testing';

import { NgxUsefulPipesService } from './ngx-useful-pipes.service';

describe('NgxUsefulPipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxUsefulPipesService = TestBed.get(NgxUsefulPipesService);
    expect(service).toBeTruthy();
  });
});
