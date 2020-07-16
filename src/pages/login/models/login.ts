import '@/extensions';

import { useCallback, useState } from 'react';

import { LoginAPI } from '../services';

export default function useLoginModel() {
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = useCallback(async (payload: { username: string; password: string }): Promise<CallBackResult> => {
    try {
      setLoading(true);
      let response: ApiResponse = await LoginAPI(payload).finally(() => setLoading(false));
      if (!!response && response.code === 1000) {
        return { state: true, msg: response.msg };
      } else return { state: false, msg: response.msg };
    } catch (error) {
      throw error;
    }
  }, []);

  return { loading, signIn };
}
