import { Router } from '@angular/router';
import { CadastroExisteService } from './cadastro-existe.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { Cadastro } from './cadastro';
import { minusculoValidator } from './minusculo.validator';
import { cadastroSenhaIguaisValidator } from './cadastro-senha-iguais.validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
    private cadastroExisteService: CadastroExisteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group(
      {
        userName: ['', [minusculoValidator], [this.cadastroExisteService.cadastroJaExiste()]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        fullName: [''],
        confirma_password: ['', [Validators.required]],
      },
      {
        Validators: [cadastroSenhaIguaisValidator],
      }
    );
  }

  cadastrar() {
    if (this.cadastroForm.valid) {
      const novoCadastro = this.cadastroForm.getRawValue() as Cadastro;
      this.cadastroService.cadastroNovoUsuario(novoCadastro).subscribe(
        () => {
          this.router.navigate(['login']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
