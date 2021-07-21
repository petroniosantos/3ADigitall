import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { CadastroService } from './cadastro.service';

@Injectable({
  providedIn: 'root',
})
export class CadastroExisteService {
  constructor(private cadastroService: CadastroService) {}

  cadastroJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((cadastroUsuario) =>
          this.cadastroService.verificaCadastroExistente(cadastroUsuario)
        ),
        map((cadastroExiste) =>
          cadastroExiste ? { cadastroExistente: true } : null
        ),
        first()
      );
    };
  }
}
