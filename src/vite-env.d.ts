/// <reference types="vite/client" />

export interface IPost {
  id: number;
  title: string;
  text: string;
  tags: string;
  image?: string;
  author: string;
  author_id: number;
}

export interface IPostActions {
  type: string
  payload?: IPost
  error?: string
}

export interface IPostState {
  posts: Array<IPost>,
  isLoading: boolean,
  error: any,
}
