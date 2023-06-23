import { IPost } from '../vite-env';
import api from './api';

const getPosts = async () => {
const res = await api.get<IPost>('posts/');
return res;
};

export default getPosts;