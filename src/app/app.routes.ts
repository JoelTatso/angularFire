import { Routes } from '@angular/router';

const appName = 'leMarche Admin'

export const routes: Routes = [
  {
    path:'connexion',title:`Se connecter | ${appName}`, loadComponent: () => import('./components/auth/login.component')
  },
  {
    path:'enregistrement', title:`S'enregister | ${appName}`, loadComponent: () => import('./components/auth/register.component')
  },
  {
    path:'', title:`Dashboard ${appName}`, loadComponent: () => import('./components/dashboard/dashboard.component'),
    children:
     [
          {
            path:'gestion-stock', title:`Gestion Stock | ${appName}`, loadComponent: () => import('./components/dashboard/gestion-stock/gestion-stock.component'),
            children :
            [
                {
                  path:'vente', title:`Vente | ${appName}`, loadComponent: () => import('./components/dashboard/gestion-stock/vente/vente.component')
                },
                {
                  path:'aprovisionnement', title:`Aprovisionnement | ${appName}`, loadComponent: () => import('./components/dashboard/gestion-stock/aprovisionement/aprovisionement.component')
                },
                {
                  path:'stock', title:`Stock | ${appName}`, loadComponent: () => import('./components/dashboard/gestion-stock/stock/stock.component')
                },
                {
                  path:'archive', title:`Archive | ${appName}`, loadComponent: () => import('./components/dashboard/gestion-stock/archive/archive.component')
                },
                {
                  path:'', redirectTo:'vente', pathMatch:'full'
                }
              ]
          },
          {
            path:'gestion-finance', title:`Gestion Finance | ${appName}`, loadComponent: () => import('./components/dashboard/gestion-finance/gestion-finance.component')
          },
          {
            path:'parametre', title:`Paramètre | ${appName}`, loadComponent: () => import('./components/dashboard/parametre/parametre.component')
          },
          {
            path:'', redirectTo:'gestion-stock', pathMatch:'full'
          }
    ]
  },
  {
    path:'**', redirectTo:'', pathMatch:'full'
  }
];
