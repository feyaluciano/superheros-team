/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchSuperheroService } from './search-superhero.service';

describe('Service: SearchSuperhero', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchSuperheroService]
    });
  });

  it('should ...', inject([SearchSuperheroService], (service: SearchSuperheroService) => {
    expect(service).toBeTruthy();
  }));
});
