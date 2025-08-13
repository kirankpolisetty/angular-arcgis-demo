import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'map',
    loadComponent: () =>
      import('./arcgismap/arcgismap.js').then(m => m.Arcgismap)
  },
  { path: '', redirectTo: 'map', pathMatch: 'full' }
];
