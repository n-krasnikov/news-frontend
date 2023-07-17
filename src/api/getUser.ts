import { ICurrentUser } from '../vite-env';
import api from './api';

const getUser = async (id: string) => {
  const res = await api.get<ICurrentUser>(`users/${id}/`);
  return res;
};

export default getUser;