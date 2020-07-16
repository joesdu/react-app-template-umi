import { request } from 'umi';

/**
 * 登录API
 * @param data
 */
export const LoginAPI = async (data: { username: string; password: string }): Promise<ApiResponse> => request('/api/user/login', { data, method: 'POST' });
