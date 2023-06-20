import { type FC } from 'react';

import { PostCard } from '../../components/Post/PostCard';

import './MainPage.css';

const newsList = [
  {
    "id": 1,
    "title": "T1",
    "text": "t1",
    "tags": "?>?<?",
    "image": null,
    "author": "fdsf",
    "author_id": 1
  },
  {
    "id": 2,
    "title": "T2",
    "text": "t2",
    "tags": "------",
    "image": null,
    "author": "123123",
    "author_id": 2
  },
  {
    "id": 3,
    "title": "T3",
    "text": "t3",
    "tags": "0-0-0-0-0",
    "image": null,
    "author": "fdsf",
    "author_id": 1
  }];

// export default function MainPage(): JSX.Element {
//   return (
//     newsList.map((post) => <PostCard key={post.id}/>)
//   );
// }

export const MainPage: FC = () => {
  
  return (
    <div className='news'>
      {newsList.map((post) =>( 
      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        text={post.text}
        tags={post.tags}
        author={post.author}
        author_id={post.author_id}
      />))}
    </div>
  );
}