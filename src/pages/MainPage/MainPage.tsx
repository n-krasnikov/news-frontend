import { type FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import PostCard from '../../components/Post/PostCard';
import { Loader } from '../../components/Loader/Loader';
import { AlertMessage } from '../../components/AlertMessage/AlertMessage';

import { postsRequest } from '../../redux/actions/posts';
import { RootState } from '../../redux/reducers/rootReducer';
import { IPost, IPostState } from '../../vite-env';
import * as LOCALES from '../../locales.json';

import './MainPage.css';

export const MainPage: FC = () => {
  const { posts, isLoading, error }: IPostState = useSelector((store: RootState) => store.posts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(postsRequest());
  }, [dispatch]);

  if (isLoading) return <Loader />;
  if (error) return <AlertMessage severity='error' message={error}/>;

  return (
    <div className='news'>

      {!posts.length && (
        <AlertMessage severity='info' message={LOCALES.EMPTY_NEWS}/>)
      }

      {posts.map((post:IPost) =>(
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

    </div>
  );
}

