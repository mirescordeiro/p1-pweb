import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { LoginResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // TODO: implementar endpoint /api/login
  public autenticar(email: string, senha: string): Observable<LoginResponse> {
    const sucesso = email === 'teste@email.com' && senha === '123456';

    return of({
      token: sucesso ? 'fake-jwt-token' : null,
    });
  }
}
