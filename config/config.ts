import Route from './router';
import defaultSettings from './default';
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
  fastRefresh: {},
  forkTSChecker: {},
  ignoreMomentLocale: true,
  layout: {
    locale: true,
    ...defaultSettings
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true
  },
  targets: { ie: 11 },
  theme: { 'primary-color': defaultSettings.primaryColor },
  title: 'ReactAppTemplate'
});
