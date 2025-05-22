import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component'),
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component'),
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
