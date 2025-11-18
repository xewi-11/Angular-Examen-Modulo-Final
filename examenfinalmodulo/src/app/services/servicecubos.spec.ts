import { TestBed } from '@angular/core/testing';

import { Servicecubos } from './servicecubos';

describe('Servicecubos', () => {
  let service: Servicecubos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicecubos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
