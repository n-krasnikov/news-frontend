import { IPost } from "../vite-env";

export const sortPosts = (posts: IPost[]): IPost[] => 
  posts.sort((a, b) => {
    if (a.id > b.id) return -1;
    return 0;
  });
