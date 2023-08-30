/// <reference types="vite/client" />
interface IUser {
  id: number,
  email: string,
  username: string,
  avatar: string,
}

interface IState {
  isLoading: boolean,
  error: string | null,
}

export interface IPost {
  id: number,
  title: string,
  text: string,
  tags: string,
  image?: string,
  author: string,
  author_id: number,
}

export interface IPostCreate {
  title: string,
  text: string,
  tags: string,
  image?: File | null,
}

export interface IEditUser {
  username: string,
  avatar?: File | null, 
}

export interface IModal {
  status: boolean,
  type?: ModalType,
}

export interface IAuth {
  email: string,
  password: string,
  username?: string,
}

export interface ICurrentUser {
  user: IUser,
  posts: Array<IPost>,
}

export interface IPostActions {
  type: string,
  payload?: IPost,
  error?: string,
}

export interface IPostState extends IState {
  posts: Array<IPost>,
}

export interface IAuthState extends IState {
  userData: IUser | null,
  isLoggedIn: boolean,
  authErrors: object | null,
}

export interface ICurrentUserState extends IState {
  currentUser: IUser | null,
  userPosts: Array<IPost>,
  error: string | object | null,
}

type ModalType = 'Sign In' | 'Sign Up' | 'Add Post' | 'Edit Profile';
export interface IModalState {
  isModalOpen: boolean,
  modalType?: ModalType,
}

export interface IAuthActions {
  type: string,
  payload?: IAuthUser,
  error?: string,
}

export interface ICurrentUserActions {
  type: string,
  payload?: ICurrentUser,
  error?: string,
}

export interface IModalAction {
  type: string,
  payload: IModal,
}

export interface IPostCreateAction {
  type: string,
  payload?: IPostCreate,
  error?: string,
}

export interface IEditUserAction {
  type: string,
  payload?: IEditUser,
  error?: string,
}
