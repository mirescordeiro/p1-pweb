import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';

import { CestaService, ProdutoService } from '../../services';
import { ItemCesta, Produto } from '../../interfaces';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, FormsModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss',
})
export class ProdutoComponent implements OnInit {
  public tamanhoSelecionado: number | null = null;

  private activeRoute = inject(ActivatedRoute);
  private cestaService = inject(CestaService);
  private produtoService = inject(ProdutoService);
  private router = inject(Router);

  public ngOnInit(): void {
    this.tamanhoSelecionado = null;
  }

  public produto$ = this.activeRoute.paramMap.pipe(
    map((params) => params.get('id')),
    switchMap((id) => this.produtoService.getProduto(id!)),
    catchError((error) => {
      // TODO: implementar rota 404
      return of(error);
    })
  );

  public adicionarNaCesta(produto: Produto): void {
    const { id, imagem, nome, preco } = produto;
    const item: ItemCesta = {
      ...{ id, imagem, nome, preco },
      tamanho: this.tamanhoSelecionado!,
      quantidade: 1,
    };

    this.cestaService.adicionarItem(item);
    this.router.navigate(['cesta']);
  }
}
