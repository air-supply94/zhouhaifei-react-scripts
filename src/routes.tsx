import React from 'react';
import { BasicLayout } from './compnents/basicLayout';
import { NotAuthority } from './pages/403';
import { NotPage } from './pages/404';
import { MenuDataItem } from './utils';

export const routes: MenuDataItem[] = [
  {
    component: BasicLayout,
    name: 'app',
    children: [
      {
        exact: true,
        path: '/',
        redirect: '/dashboard',
      },
      {
        path: '/dashboard',
        name: '仪表盘',
        exact: true,
        component: React.lazy(() => import('./pages/dashboard')),
      },
      {
        path: '/403',
        exact: true,
        component: NotAuthority,
      },
      {
        path: '',
        component: NotPage,
      },
    ],
  },
];
