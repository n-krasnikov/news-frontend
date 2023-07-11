import { IAuth } from '../vite-env';
import api from './api';

const prefix = 'auth/';

export const signIn = async (userData: IAuth) => {
  const res = await api.post<IAuth>(`${prefix}signin`, {...userData});
  return res;
};

export const signUp = async (userData: IAuth) => {
  const res = await api.post<IAuth>(`${prefix}signup`, {...userData});
  return res;
};

export const verify = async () => {
  const res = await api.get<IAuth>(`djos/users/me/`);
  return res;
};
