import { Button, Card, Form, Input, Modal, message } from 'antd';
import { Helmet, useModel } from 'umi';
import { LockOutlined, QuestionCircleOutlined, UserOutlined } from '@ant-design/icons';

import React from 'react';
import { getPageQuery } from '@/utils/utils';
import styles from './index.less';

/**
 * 此方法会跳转到 redirect 参数所在的位置
 */
const replaceGoto = async () => {
  const urlParams = new URL(window.location.href);
  const params = getPageQuery();
  let { redirect } = params as { redirect: string };
  if (redirect) {
    const redirectUrlParams = new URL(redirect);
    if (redirectUrlParams.origin === urlParams.origin) {
      redirect = redirect.substr(urlParams.origin.length);
      if (redirect.match(/^\/.*#/)) redirect = redirect.substr(redirect.indexOf('#'));
    } else {
      window.location.href = '/';
      return;
    }
  }
  window.location.href = urlParams.href.split(urlParams.pathname)[0] + (redirect || '/');
};

export default (): React.ReactElement => {
  const { refresh } = useModel('@@initialState');
  // Todo Mac OS下要写login.login ?
  const { loading, signIn } = useModel('login.login');

  const handleSubmit = async (values: any) => {
    const { username, password } = values;
    let args: { username: string; password: string } = { username, password };
    await signIn(args)
      .then(async (result: CallBackResult) => {
        if (result.state) await refresh().then(replaceGoto);
        else message.info(result.msg);
      })
      .catch((reason: any) => message.error(`登陆失败:${reason}`));
  };

  const showModal = () =>
    Modal.confirm({ title: '忘记密码?', centered: true, icon: <QuestionCircleOutlined />, content: '登陆后修改密码或联系管理员.', cancelButtonProps: { style: { visibility: 'hidden' } } });

  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>登录</title>
      </Helmet>
      <div className={styles.content}>
        <Card style={{ width: 350 }} title="用户登录" bordered headStyle={{ textAlign: 'center' }}>
          <Form onFinish={handleSubmit} style={{ maxWidth: 380 }}>
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
              <Input prefix={<UserOutlined />} allowClear placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入账户密码!' }]}>
              <Input.Password prefix={<LockOutlined />} allowClear placeholder="请输入密码" />
            </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
              <Button type="primary" size="large" htmlType="submit" loading={loading} shape="round" style={{ width: '100%', marginTop: 15 }}>
                登陆
              </Button>
            </Form.Item>
            <Form.Item style={{ marginBottom: 0, marginTop: 5 }}>
              <a style={{ float: 'right', color: '#b2b2b2' }} onClick={showModal}>
                忘记密码?
              </a>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};
