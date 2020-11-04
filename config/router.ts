// umi routes: https://umijs.org/docs/routing

import { IRoute } from 'umi';

const Route: Array<IRoute> = [
  {
    layout: false,
    path: '/login',
    component: './login'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: './home'
  },
  {
    name: 'test',
    path: '/test',
    component: './test',
    access: 'canTest' // 权限定义返回值的某个 key
  }
];

export default Route;
