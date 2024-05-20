import React from "react";


function Post({post}) {
  return (
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <small>Author: {post.author}</small>
    </div>
  )
}

export default Post