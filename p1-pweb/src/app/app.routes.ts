import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'produto/:id',
    loadComponent: () =>
      import('./pages/produto/produto.component').then(
        (m) => m.ProdutoComponent
      ),
  },
  {
    path: 'cesta',
    loadComponent: () =>
      import('./pages/cesta/cesta.component').then((m) => m.CestaComponent),
  },
];
