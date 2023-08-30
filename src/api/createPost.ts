import { IPostCreate } from '../vite-env';
import api from './api';

export const createPost = async (payload: IPostCreate) => {
  const res = await api.post<IPostCreate>(
    'posts/', 
    payload, 
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return res;
};
