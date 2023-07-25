import { IEditUser } from '../vite-env';
import api from './api';

export const editUser = async (id:string, payload: IEditUser) => {
  const res = await api.patch<IEditUser>(
    `users/${id}/`, 
    payload, 
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return res;
};