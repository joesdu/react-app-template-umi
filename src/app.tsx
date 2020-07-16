import { ErrorShowType, RequestConfig, history } from 'umi';

import { BaseUrl } from '@/config';
import { UserInfoAPI } from './services/user';

interface InitialState {
  access?: any;
}

export const getInitialState = async (): Promise<InitialState> => {
  if (history.location.pathname !== '/login') {
    try {
      let response: ApiResponse = await UserInfoAPI();
      const {
        result: { access }
      } = response;
      return { access: access };
    } catch (error) {
      history.push('/login');
      throw error;
    }
  } else return {};
};

//#region ErrorHandler
// const codeMessage = (code: number) => {
//   switch (code) {
//     case 200:
//       return '服务器成功返回请求的数据.';
//     case 201:
//       return '新建或修改数据成功.';
//     case 202:
//       return '一个请求已经进入后台排队(异步任务).';
//     case 204:
//       return '删除数据成功.';
//     case 400:
//       return '发出的请求有错误,服务器没有进行新建或修改数据的操作.';
//     case 401:
//       return '用户没有权限(令牌,用户名,密码错误).';
//     case 403:
//       return '用户得到授权,但是访问是被禁止的.';
//     case 404:
//       return '发出的请求针对的是不存在的记录,服务器没有进行操作.';
//     case 405:
//       return '请求方法不被允许.';
//     case 406:
//       return '请求的格式不可得.';
//     case 410:
//       return '请求的资源被永久删除,且不会再得到的.';
//     case 422:
//       return '当创建一个对象时,发生一个验证错误.';
//     case 500:
//       return '服务器发生错误,请检查服务器.';
//     case 502:
//       return '网关错误.';
//     case 503:
//       return '服务不可用,服务器暂时过载或维护.';
//     case 504:
//       return '网关超时.';
//     default:
//       return `未知错误,错误代码:${code}`;
//   }
// };

// /**
//  * 异常处理程序
//  */
// const errorHandler = (error: any) => {
//   const { response } = error;
//   if (response && response.status) {
//     const { status, url, statusText } = response;
//     const errorText = codeMessage(status) || statusText;
//     notification.error({ message: `请求错误 ${status}: ${url}`, description: errorText });
//   }
//   if (!response) notification.error({ description: '您的网络发生异常,无法连接服务器', message: '网络异常' });
//   throw error;
// };
//#endregion

export const request: RequestConfig = {
  // API 符合规范则使用errorHandler，不规范使用errorConfig
  // errorHandler: errorHandler,
  errorConfig: {
    adaptor: (res: any) => ({
      data: res.result,
      success: res.code === 1000,
      errorMessage: res.message || res.msg,
      errorCode: res.code,
      showType: ErrorShowType.NOTIFICATION
    })
  },
  prefix: BaseUrl,
  // method: 'POST',
  // requestType: 'form',
  credentials: 'include',
  middlewares: [],
  requestInterceptors: [
    // (url: string, options) => {
    //   options.headers = { Authorization: Cookies.get('userToken') ?? '' };
    //   return { url, options };
    // }
  ],
  responseInterceptors: []
};
