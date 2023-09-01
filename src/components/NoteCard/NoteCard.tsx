import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IPost } from '../../vite-env';

import defaultAvatar from '../../assets/react.svg';

import './NoteCard.css';

const NoteCard: FC<IPost> = ({...post}) => {
  const tagArr = post.tags.split(',');
  const navigate = useNavigate();

  const goToUserPage = () => {
    navigate(`/users/${post.author_id}/`);
  };

  return (
    <div className='post-card'>
      <img className='post-card-avatar clickable' src={defaultAvatar} onClick={goToUserPage}/>
      <div className='post-card-info info'>
        <span className='info-author clickable' onClick={goToUserPage}>{post.author}</span>
        <span className='info-timestamp'>Published At: {post.created_at}</span>
      </div>
      {post.image && <img className='post-card-img' src={post.image}/>}
      <div className='post-card-content content'>
        <h2 className='content-title'>{post.title}</h2>
        <p className='content-text'>{post.text}</p>
        {tagArr.map(tag => <span className='content-tag clickable' key={tag}>#{tag} </span>)}
      </div>
    </div>  
  );
};

export default NoteCard;
