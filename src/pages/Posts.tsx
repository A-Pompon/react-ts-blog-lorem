import React, { useEffect, useState } from 'react'
import { PostsList } from '../component/PostsList'
import '../css/posts.css'
import { PostData } from '../interfaces';

export const Posts: React.FC = () => {

    const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
    const [numberOfPosts, setNumberOfPosts] = useState<number>(5);

    const localOrStateNumber = () => localStorage.getItem('number-input') || numberOfPosts;

    const localOrStateNum = localOrStateNumber();

    useEffect(() => {
        const getPosts =async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${localOrStateNum}`);
            const data: PostData[] = await response.json();
            setAllPosts(data);
        }
        getPosts();
    }, [localOrStateNum]);
    
    const onChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfPosts(+e.target.value);
        localStorage.setItem('number-input', e.target.value)
    }

  return (
    <div className='posts-container'>
        <h1>Publication</h1>
        <div className='label-input'>
            <label htmlFor="posts">Nombre de publication {localOrStateNum}</label>
            <input className='input' type="range" name="posts" min={1} max={20} onChange={onChangeRange} defaultValue={localOrStateNum}/>
        </div>
        <PostsList allPosts={allPosts}/>
    </div>
  )
}
