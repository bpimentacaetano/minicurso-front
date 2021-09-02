/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RnaService } from './rna.service';

describe('Service: Rna', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RnaService]
    });
  });

  it('should ...', inject([RnaService], (service: RnaService) => {
    expect(service).toBeTruthy();
  }));
});
