import { IPost } from '../vite-env';

export const sortPosts = (posts: IPost[]): IPost[] => {
  const currentPosts = {...posts};
  return currentPosts.sort((a, b) => a.id > b.id ? -1 : 0);
};
