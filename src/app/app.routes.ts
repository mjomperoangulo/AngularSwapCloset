import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    redirectTo: 'app',
    pathMatch: 'full',

  },
  {
    path: 'app',
    loadComponent: () => import('./paginas/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'perfil',
        loadComponent: () => import('./paginas/perfil/perfil.page').then(m =>
          m.PerfilPage),
      },
      {
        path: 'prendas',
        loadComponent: () => import('./paginas/prendas/prendas.page').then(m =>
          m.PrendasPage),
      }

    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then( m => m.LoginPage)
  },
  ];
