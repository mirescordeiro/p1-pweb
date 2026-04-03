import { Injectable } from '@angular/core';
import { CadastroRequest, CadastroResponse } from '../interfaces';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  // TODO: implementar endpoint /api/cadastro
  public cadastrar(dados: CadastroRequest): Observable<CadastroResponse> {
    const sucesso = dados.email !== 'email@existente.com';

    if (dados.email === 'email@existente.com') {
      return throwError(() => new Error('Email já cadastrado'));
    }

    return of({
      token: sucesso ? 'fake-jwt-token' : null,
    });
  }
}
