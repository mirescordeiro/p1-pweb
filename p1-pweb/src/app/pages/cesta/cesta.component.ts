import { Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CestaService } from '../../services';
import { CardComponent } from '../../shared/components';
import { ItemCesta } from '../../interfaces';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, CardComponent, RouterLink],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.scss',
})
export class CestaComponent {
  private cestaService = inject(CestaService);

  public cesta$ = this.cestaService.cesta$;
  public total$ = this.cestaService.precoTotal$;

  public adicionarNaCesta(item: ItemCesta): void {
    this.cestaService.adicionarItem(item);
  }

  public removerDaCesta(item: ItemCesta): void {
    this.cestaService.removerItem(item);
  }

  public limparSacola(): void {
    this.cestaService.limpar();
  }
}
