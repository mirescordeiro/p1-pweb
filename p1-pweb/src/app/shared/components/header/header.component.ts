import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CestaService } from '../../../services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private cestaService = inject(CestaService);

  public cesta$ = this.cestaService.cesta$;
  public total$ = this.cestaService.precoTotal$;
}
