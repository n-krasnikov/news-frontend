import { type FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Loader } from '../../components/Loader';
import { AlertMessage } from '../../components/AlertMessage';
import { PostsFeed } from '../../components/PostsFeed';

import { postsRequest } from '../../redux/actions/posts';
import { RootState } from '../../redux/reducers/rootReducer';
import { IPostState } from '../../vite-env';
import * as locales from '../../locales.json';
import { SEVERITY_ERROR, SEVERITY_INFO } from './constants';

import './MainPage.css';

export const MainPage: FC = () => {
  const { posts, isLoading, error }: IPostState = useSelector((store: RootState) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequest());
  }, []);
  
  if (isLoading) return <Loader />;
  if (error) return <AlertMessage severity={SEVERITY_ERROR} message={error}/>;
  if (!posts.length) return <AlertMessage severity={SEVERITY_INFO} message={locales.EMPTY_NEWS}/>;

  return (
    <div className='page'>
      <PostsFeed posts={posts} />
    </div>
  );
};
