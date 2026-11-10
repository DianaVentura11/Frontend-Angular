
import { Routes } from '@angular/router';

import { Catalogo } from './components/catalogo/catalogo';
import { Detalle } from './components/detalle/detalle';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    component: Catalogo
  },
  {
    path: 'detalle/:id',
    component: Detalle
  }
];
