import '@/extensions';

import { Helmet } from 'umi';
import React from 'react';
import styles from './index.less';

export default (): React.ReactElement => {
  console.log('http://service-gw.winside.com:8080/uploadFile/webicon/favicon.svg is local img');
  console.log('http://service-gw.winside.com:8080/uploadFile/webicon/favicon.svg'.test(/\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i));

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TEST</title>
      </Helmet>
      <div className={styles.info}>用于测试代码,输出内容请F12查看控制台.</div>
    </div>
  );
};
