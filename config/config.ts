import Route from './router';
import { defineConfig } from 'umi';

export default defineConfig({
  routes: Route,
  nodeModulesTransform: {
    type: 'none'
  },
  antd: {
    dark: false
  },
  dynamicImport: {
    loading: '@/components/PageLoading'
  },
  esbuild: {},
  favicon: './favicon.ico',
  hash: true,
  // history: {
  //   type: 'hash'
  // },
  forkTSChecker: {},
  ignoreMomentLocale: true,
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true
  },
  theme: { '@primary-color': '#1DA57A' },
  title: 'ReactAppTemplate'
});
