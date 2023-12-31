import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ErrorPage } from '../ErrorPage';
import { UserCard } from '../../components/UserCard';
import { Loader } from '../../components/Loader';
import { PostCard } from '../../components/PostCard';
import { IAuthState, ICurrentUserState, IPost } from '../../vite-env';
import { RootState } from '../../redux/reducers/rootReducer';
import { userRequest } from '../../redux/actions/user';
import { isObject } from '../../helpers';

import './UserPage.css'

export const UserPage: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentUser, userPosts, isLoading, error }: ICurrentUserState = useSelector((store: RootState) => store.user);
  const { userData }: IAuthState = useSelector((store: RootState) => store.auth);

  const isOwnerPage = userData?.id === currentUser?.id;

  useEffect(() => {
    if (id) dispatch(userRequest(id));
  }, [id]);

  if (isLoading) return <Loader />;
  if (isObject(error)) return <ErrorPage status={error?.status} message={error?.data?.detail}/>;

  return (
    <>
      <UserCard
        isOwnerPage={isOwnerPage}
        email={currentUser?.email ?? ''}
        username={currentUser?.username ?? ''}
        avatar={currentUser?.avatar}
        postsCount={userPosts?.length}
      />
      <div className='posts-container'>
        {userPosts?.map((post: IPost) =>(
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
    </>
  );
}