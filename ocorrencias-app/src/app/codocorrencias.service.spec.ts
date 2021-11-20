import { TestBed } from '@angular/core/testing';

import { CodocorrenciasService } from './codocorrencias.service';

describe('CodocorrenciasService', () => {
  let service: CodocorrenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodocorrenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
