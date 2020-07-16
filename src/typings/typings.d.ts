// declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

interface ApiResponse {
  /**
   * 状态码
   */
  code: number;
  /**
   * 消息
   */
  msg: string;
  /**
   * 返回数据
   */
  result: any;
}

interface CallBackResult {
  /**
   * 状态
   */
  state: boolean;
  /**
   * 消息
   */
  msg: string;
  /**
   * 数据
   */
  data?: any;
}
