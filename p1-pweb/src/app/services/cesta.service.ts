import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ItemCesta } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CestaService {
  private _cesta$ = new BehaviorSubject<Array<ItemCesta>>([]);
  public readonly cesta$ = this._cesta$.asObservable();
  public readonly precoTotal$ = this.cesta$.pipe(
    map((itens) =>
      itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0)
    )
  );

  private get itens(): Array<ItemCesta> {
    return this._cesta$.value;
  }

  public adicionarItem(item: ItemCesta): void {
    const itens = this.itens;
    const isItemExistente = itens.find((i) => this.isItemIgual(i, item));

    if (isItemExistente) {
      const itensSomados: Array<ItemCesta> = itens.map((i) =>
        this.isItemIgual(i, item) ? { ...i, quantidade: i.quantidade + 1 } : i
      );

      this._cesta$.next(itensSomados);
      return;
    }

    this._cesta$.next([...itens, item]);
  }

  public removerItem(item: ItemCesta): void {
    const itens = this.itens;

    const itensSubtraidos = itens
      .map((i) =>
        this.isItemIgual(i, item) ? { ...i, quantidade: i.quantidade - 1 } : i
      )
      .filter((i) => i.quantidade > 0);

    this._cesta$.next(itensSubtraidos);
  }

  public limpar(): void {
    this._cesta$.next([]);
  }

  private isItemIgual(a: ItemCesta, b: ItemCesta): boolean {
    return a.id === b.id && a.tamanho === b.tamanho;
  }
}
