import { type FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NoteCard } from '../../components/NoteCard';
import { Loader } from '../../components/Loader';
import { AlertMessage } from '../../components/AlertMessage';

import { postsRequest } from '../../redux/actions/posts';
import { RootState } from '../../redux/reducers/rootReducer';
import { IPost, IPostState } from '../../vite-env';
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

  return (
    <div className='container'>
      {!posts.length && (
        <AlertMessage severity={SEVERITY_INFO} message={locales.EMPTY_NEWS}/>)
      }
      {posts.map((post: IPost) => <NoteCard {...post} key={post.id}/>)}
    </div>
  );
};
