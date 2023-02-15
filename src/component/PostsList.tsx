import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/postslist.css'
import { PostData } from '../interfaces'

interface PostsListProps {
    allPosts: PostData[] | null;
}

export const PostsList: React.FC<PostsListProps> = ({allPosts}) => {

    const navigate = useNavigate();

  return (
    <ul className='list-container'>
        {allPosts?.map((post) => (
            <li key={post.id} onClick={() => navigate(`/${post.id}`)}>
                <h2>{post.title}</h2>
                <p>Lire l'article</p>
            </li>
        ))}
    </ul>
  );
}
