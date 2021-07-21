import { TestBed } from '@angular/core/testing';

import { CadastroExisteService } from './cadastro-existe.service';

describe('CadastroExisteService', () => {
  let service: CadastroExisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroExisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
