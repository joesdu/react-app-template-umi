import '@/extensions';

import { Helmet } from 'umi';
import React from 'react';
import styles from './index.less';

export default (): React.ReactElement => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TEST</title>
      </Helmet>
      <div className={styles.info}>
        <div>用于测试代码,输出内容请F12查看控制台.</div>
        <small>不会jest等测试工具,只好用这种办法了.</small>
      </div>
    </div>
  );
};
