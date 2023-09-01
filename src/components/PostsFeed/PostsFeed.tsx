import { type FC } from 'react';
import { IPost } from '../../vite-env';
import NoteCard from '../NoteCard/NoteCard';

interface IProps {
  posts: IPost[];
}

const PostsFeed: FC<IProps> = ({posts}) => (
  posts.map((post: IPost) => <NoteCard {...post} key={post.id}/>)
);

export default PostsFeed;
