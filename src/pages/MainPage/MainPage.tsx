import { type FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostCard from '../../components/PostCard/PostCard';
import { Loader } from '../../components/Loader';
import { AlertMessage } from '../../components/AlertMessage';
import { BaseModal } from '../../components/BaseModal';

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
    <div className='news'>
      {!posts.length && (
        <AlertMessage severity={SEVERITY_INFO} message={locales.EMPTY_NEWS}/>)
      }

      {posts.map((post: IPost) =>(
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          text={post.text}
          image={post.image}
          tags={post.tags}
          author={post.author}
          authorId={post.author_id}
        />))
      }
      <BaseModal/>
    </div>
  );
}

