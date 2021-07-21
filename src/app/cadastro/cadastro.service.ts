import { Cadastro } from './cadastro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  cadastroNovoUsuario( novoCadastro: Cadastro) {
    console.log(novoCadastro);
    return this.http.post('http://localhost:3000/user/signup', novoCadastro);
    
  }

  verificaCadastroExistente(cadastroUsuario: string) {
    return this.http.get(`http://localhost:3000/user/exists/${cadastroUsuario}`);
  }
}
