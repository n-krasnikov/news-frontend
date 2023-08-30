import { IAuth } from '../vite-env';
import api from './api';

export const auth = async (path: string, userData: IAuth) => {
  const res = await api.post<IAuth>(`auth/${path}`, {...userData});
  return res;
};

export const verify = async () => {
  const res = await api.get<IAuth>('djos/users/me/');
  return res;
};
