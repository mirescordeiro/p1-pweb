import { Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';

import { ProdutoService } from '../../services';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, FormsModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss',
})
export class ProdutoComponent {
  public tamanhoSelecionado: number;

  private route = inject(ActivatedRoute);
  private produtoService = inject(ProdutoService);

  public produto$ = this.route.paramMap.pipe(
    map((params) => params.get('id')),
    switchMap((id) => this.produtoService.getProduto(id!)),
    catchError((error) => {
      // TODO: implementar rota 404
      return of(error);
    })
  );

  public adicionarNaCesta(): void {}
}
