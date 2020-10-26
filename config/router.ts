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
    component: './test',
    access: 'canTest' // 权限定义返回值的某个 key
  }
];

export default Route;
