import Route from './router';
import defaultSettings from './default';
import { defineConfig } from 'umi';

export default defineConfig({
  antd: {
    dark: false
  },
  dynamicImport: {
    loading: '@/components/PageLoading'
  },
  esbuild: {},
  favicon: './favicon.ico',
  fastRefresh: {},
  forkTSChecker: {},
  hash: true,
  // history: {
  //   type: 'hash'
  // },
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
  mfsu: {},
  nodeModulesTransform: {
    type: 'none'
  },
  routes: Route,
  targets: { ie: 11 },
  theme: { 'primary-color': defaultSettings.primaryColor },
  title: 'ReactAppTemplate',
  webpack5: {}
});
