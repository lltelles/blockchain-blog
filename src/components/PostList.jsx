import React from "react";
import Post from './Post'


function PostList({posts}) {
  return (
    <div>
        <h2>Posts</h2>
        {posts.map((post) => (
            <Post key={post.id} post={post}/>
        ))}
    </div>
  )
}

export default PostList