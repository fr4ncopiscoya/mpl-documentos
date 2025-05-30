import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component'),
        children: [
            {
                path: 'upload',
                loadComponent: () => import('./pages/documents/upload-documents/upload-documents.component')
            },
            {
                path: 'documentos',
                loadComponent: () => import('./pages/documents/list-documents/list-documents.component')
            }
        ]
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
