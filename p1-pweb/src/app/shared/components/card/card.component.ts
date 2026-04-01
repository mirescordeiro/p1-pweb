import { Component, Input, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

import { ItemCesta, Produto } from '../../../interfaces';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() produto: Produto | ItemCesta;

  private router = inject(Router);

  public aoClicar(): void {
    this.router.navigate(['produto', this.produto.id]);
  }
}
