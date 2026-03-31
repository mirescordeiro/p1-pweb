import { Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Observable, map } from 'rxjs';

import { HomeService } from '../../services';
import { ColecaoDetalhe } from '../../interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private homeService = inject(HomeService);
  public homeDestaque$: Observable<ColecaoDetalhe> = this.homeService.getHome().pipe(
    map(res => res.colecaoDestaque)
  );
}
