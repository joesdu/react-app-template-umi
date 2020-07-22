// umi routes: https://umijs.org/docs/routing

import { IRoute } from 'umi';

const Route: Array<IRoute> = [
  {
    path: '/login',
    component: './login'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'Home',
    path: '/home',
    component: './home'
  },
  {
    name: 'Test',
    path: '/test',
    component: './test'
  }
];

export default Route;
