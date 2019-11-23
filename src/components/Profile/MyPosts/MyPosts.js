import React from 'react';
import s from './MyPosts.module.css'
import Post from './MyPost/Post';

const MyPosts = () => {

  let posts = [
    {id :1, message: 'hello',likesCount: 12},
    {id :2, message: 'my first post',likesCount:19}
]

  let postsElements = posts
  .map( (p) => <Post message={p.message} likesCount={p.likesCount}/>);

  return (
    <div className={s.postsBlock}>
       <h3> my posts </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>

  );
}

export default MyPosts;
