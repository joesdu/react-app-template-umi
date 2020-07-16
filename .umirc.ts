import { defineConfig } from 'umi';

export default defineConfig({
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
  favicon: './favicon.svg',
  hash: true,
  // history: {
  //   type: 'hash'
  // },
  ignoreMomentLocale: true,
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true
  },
  // theme: { 'primary-color': '#FFFFFF' },
  title: 'ReactAppTemplate'
});
