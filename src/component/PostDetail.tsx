import React from 'react'
import { Link } from 'react-router-dom';
import '../css/postdetail.css'
import { PostData } from '../interfaces';

interface PostDetailProps {
    onePost : PostData | null;
}

export const PostDetail: React.FC<PostDetailProps> = ({onePost}) => {
  return (
    <div className='postdetail-container'>
        <h1>Publication n°: {onePost?.id}</h1>
        <h2>Titre : {onePost?.title}</h2>
        <p>{onePost?.body}</p>
        <Link to={"/"} className='button'>Retour</Link>
    </div>
  )
}
