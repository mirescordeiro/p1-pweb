import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Produto } from '../interfaces';
import { Produtos } from '../mocks';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  // TODO: implementar endpoint /api/produtos/:id
  public getProduto(id: string): Observable<Produto> {
    const produto = Produtos.find(p => p.id === id);

    if (!produto) {
      return throwError(() => new Error('Produto não encontrado'));
    }

    return of(produto);
  }
}
