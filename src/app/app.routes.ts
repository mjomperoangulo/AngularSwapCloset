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
        path: 'detalle-prenda',
        loadComponent: () => import('./paginas/detalle-prenda/detalle-prenda.page').then( m => m.DetallePrendaPage)
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('./paginas/chat/chat.page').then(m => m.ChatPage)
      },
      {
        path: 'publicar-prenda',
        loadComponent: () => import('./paginas/publicar-prenda/publicar-prenda.page').then( m => m.PublicarPrendaPage)
      },
      {
        path: 'inventario',
        loadComponent: () => import('./paginas/inventario/inventario.page').then( m => m.InventarioPage)
      },
      {
        path: 'detalle-prendaprestamo',
        loadComponent: () => import('./paginas/detalle-prendaprestamo/detalle-prendaprestamo.page').then( m => m.DetallePrendaprestamoPage)
      },
      {
        path: 'buscar',
        loadComponent: () => import('./paginas/buscar/buscar.page').then( m => m.BuscarPage)
      },
      {
        path: 'reputacion',
        loadComponent: () => import('./paginas/reputacion/reputacion.page').then( m => m.ReputacionPage)
      },
      {
        path: 'valoracion',
        loadComponent: () => import('./paginas/valoracion/valoracion.page').then( m => m.ValoracionPage)
      },
      {
        path: 'estadisticas',
        loadComponent: () => import('./paginas/estadisticas/estadisticas.page').then( m => m.EstadisticasPage)
      },
      {
        path: 'missolicitudes',
        loadComponent: () => import('./paginas/missolicitudes/missolicitudes.page').then( m => m.MissolicitudesPage)
      },
      {
        path: 'valoracionesprestamo',
        loadComponent: () => import('./paginas/valoracionesprestamo/valoracionesprestamo.page').then( m => m.ValoracionesprestamoPage)
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
  {
    path: 'chat-detalle',
    loadComponent: () => import('./paginas/chat-detalle/chat-detalle.page').then( m => m.ChatDetallePage)
  },
  {
    path: 'chat-detalleprestamo',
    loadComponent: () => import('./paginas/chat-detalleprestamo/chat-detalleprestamo.page').then( m => m.ChatDetalleprestamoPage)
  },

  // Página no encontrada
  {
    path: '**',
    loadComponent: () =>
      import('./paginas/no-encontrada/no-encontrada.page').then(m => m.NoEncontradaPage)
  },























];
