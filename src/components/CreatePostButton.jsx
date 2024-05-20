import React from 'react'

function CreatePostButton(createPost) {
  return (
    <div>
        <button type='submit' onClick={createPost}>Create Post</button>
    </div>
  )
}

export default CreatePostButton