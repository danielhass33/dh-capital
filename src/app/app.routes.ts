import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout').then((m) => m.MainLayout),
    children: [
      {
        path: '',
        title: 'DH Capital Group | Início',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
      },
      {
        path: 'sobre',
        title: 'Sobre | DH Capital Group',
        loadComponent: () => import('./features/sobre/sobre').then((m) => m.Sobre),
      },
      {
        path: 'atuacao',
        title: 'Atuação | DH Capital Group',
        loadComponent: () => import('./features/atuacao/atuacao').then((m) => m.Atuacao),
      },
      {
        path: 'portfolio',
        title: 'Portfólio | DH Capital Group',
        loadComponent: () => import('./features/portfolio/portfolio').then((m) => m.Portfolio),
      },
      {
        path: 'portfolio/sexta-marcha',
        title: 'Sexta Marcha | DH Capital Group',
        loadComponent: () =>
          import('./features/portfolio/sexta-marcha/sexta-marcha').then((m) => m.SextaMarcha),
      },
      {
        path: 'parcerias',
        title: 'Parcerias | DH Capital Group',
        loadComponent: () => import('./features/parcerias/parcerias').then((m) => m.Parcerias),
      },
      {
        path: 'contato',
        title: 'Contato | DH Capital Group',
        loadComponent: () => import('./features/contato/contato').then((m) => m.Contato),
      },
    ],
  },
  {
    path: '**',
    title: 'Página não encontrada',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];
