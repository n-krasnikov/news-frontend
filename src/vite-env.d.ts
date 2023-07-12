/// <reference types="vite/client" />
interface IUser {
  id: number
  email: string
  username: string
  avatar: string
}

export interface IPostState {
  posts: Array<IPost>,
  isLoading: boolean,
  error: string | null,
}

export interface IModalState {
  isModalOpen: boolean
  modalType?: string
}

export interface IAuthState {
  userData: IUser | null,
  isLoading: boolean,
  isLoggedIn: boolean,
  error: string | null,
  authErrors: object | null,
}

export interface IPost {
  id: number;
  title: string;
  text: string;
  tags: string;
  image?: string;
  author: string;
  author_id: number;
}

export interface IModal {
  status: boolean
  type?: string
}

export interface IAuth {
  email: string
  password: string
  username?: string
}

export interface IPostActions {
  type: string
  payload?: IPost
  error?: string
}

export interface IModalAction {
  type: string
  payload: IModal
}

export interface IAuthActions {
  type: string
  payload?: IAuthUser
  error?: string
  }