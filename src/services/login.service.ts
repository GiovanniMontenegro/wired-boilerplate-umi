import request from '@/utils/request';

export interface ILoginRequest {
  username: string;
  password: string;
}

export function loginRequest(user: ILoginRequest): Promise<any> {
  return request('/api/auth/login', {
    method: 'POST',
    data: { ...user },
  });
}
