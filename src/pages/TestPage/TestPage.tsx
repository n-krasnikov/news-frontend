import { useEffect, type FC } from 'react';

import './TestPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequest } from '../../redux/actions/posts';
import { IPost, IPostState } from '../../vite-env';
import { RootState } from '../../redux/reducers/rootReducer';
import { NoteCard } from '../../components/NoteCard';

import longImg from '../../assets/image.webp';
import shortImg from '../../assets/img.png';

export const TestPage: FC = () => {
  const { posts, isLoading, error }: IPostState = useSelector((store: RootState) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequest());
  }, []);

  // console.log(isLoading, posts, error);

  const fakeData: IPost = {
    author: '_admin',
    author_id: 2,
    id: 6,
    image: undefined,
    tags: 'tag_1,tag_2,tag3',
    text: 'some large text',
    title: 'Title'
  };

  const fakeDataLongImg: IPost = {
    author: '_admin',
    author_id: 2,
    id: 6,
    image: longImg,
    tags: 'tag_1,tag_2,tag3',
    text: 'some large text',
    title: 'Title'
  };

  const fakeDataShortImg: IPost = {
    author: '_admin',
    author_id: 2,
    id: 6,
    image: shortImg,
    tags: 'tag_1,tag_2,tag_3,tag_4,tag_5,tag_6,tag_7,tag_8,tag_9,tag_0',
    text: 'some large text',
    title: 'Title'
  };

  return(
    <div className='container'>
      {/* <h1>{fakeData.author}</h1> */}
      <NoteCard {...fakeDataShortImg} />
      <NoteCard {...fakeDataLongImg} />
      <NoteCard {...fakeData} />
      <NoteCard {...fakeData} />
    </div>
  );
};
