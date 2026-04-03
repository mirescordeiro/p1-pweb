import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import {
  CadastroRequest,
  CadastroResponse,
  LoginResponse,
  RecuperarSenhaResponse,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  // TODO: implementar endpoint /auth/login
  public autenticar(email: string, senha: string): Observable<LoginResponse> {
    const sucesso = email === 'teste@email.com' && senha === '123456';

    return of({
      token: sucesso ? 'fake-jwt-token' : null,
    });
  }

  // TODO: implementar endpoint /auth/cadastro
  public cadastrar(dados: CadastroRequest): Observable<CadastroResponse> {
    const sucesso = dados.email !== 'email@existente.com';

    if (dados.email === 'email@existente.com') {
      return throwError(() => new Error('Email já cadastrado'));
    }

    return of({
      token: sucesso ? 'fake-jwt-token' : null,
    });
  }

  // TODO: implementar endpoint /auth/recuperar-senha
  redefinirSenha(email: string): Observable<RecuperarSenhaResponse> {
    const emailNormalizado = email.trim().toLowerCase();

    if (emailNormalizado === 'erro@email.com') {
      return throwError(() => new Error('Erro ao tentar recuperar senha.'));
    }

    return of({
      mensagem: 'Se o e-mail existir, enviaremos instruções.',
    });
  }
}
