import { Routes } from '@angular/router';

export const routes: Routes = [

  // Página inicial
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Login fuera del menú
  {
    path: 'login',
    loadComponent: () =>
      import('./paginas/login/login.page').then(m => m.LoginPage)
  },

  // Aplicación con menú
  {
    path: 'app',
    loadComponent: () =>
      import('./paginas/tabs/tabs.page').then(m => m.TabsPage),
    children: [

      {
        path: 'home',
        loadComponent: () =>
          import('./paginas/home/home.page').then(m => m.HomePage)
      },

      {
        path: 'perfil',
        loadComponent: () =>
          import('./paginas/perfil/perfil.page').then(m => m.PerfilPage)
      },

      {
        path: 'perfil-detalle',
        loadComponent: () =>
          import('./paginas/perfil-detalle/perfil-detalle.page').then(m => m.PerfilDetallePage)
      },

      {
        path: 'prendas',
        loadComponent: () =>
          import('./paginas/prendas/prendas.page').then(m => m.PrendasPage)
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },

  // Notificaciones
  {
    path: 'notificaciones',
    loadComponent: () =>
      import('./paginas/notificaciones/notificaciones.page').then(m => m.NotificacionesPage)
  },

  // Página no encontrada
  {
    path: '**',
    loadComponent: () =>
      import('./paginas/no-encontrada/no-encontrada.page').then(m => m.NoEncontradaPage)
  },


];
