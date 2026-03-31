import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, map } from 'rxjs';

import { HomeService } from '../../services';
import { ColecaoDetalhe } from '../../interfaces';
import { CardComponent } from '../../shared/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private homeService = inject(HomeService);

  public colecao$: Observable<ColecaoDetalhe> = this.homeService
    .getHome()
    .pipe(map((res) => res.colecaoDestaque));
}
