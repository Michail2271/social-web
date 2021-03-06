import React from 'react';
import s from './MyPosts.module.css'
import Post from './MyPost/Post';
import { updateNewPostTextActionCreator, AddPostActionCreator } from '../../../Redux/state';




const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let postsElements = props.posts
  .map( (p) => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {
      props.dispatch(AddPostActionCreator());
    }

    let onPostChange =() => {
      let text = newPostElement.current.value;
      props.dispatch(updateNewPostTextActionCreator(text));
    }

  return (
    <div className={s.postsBlock}>
       <h3> my posts </h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange ={onPostChange} value={props.newPostText} / >
        </div>
        <div>
          <button onClick={ addPost }>add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>

  );
}

export default MyPosts;
