import React from "react";
import CreatePostButton from "./CreatePostButton";

function PostForm({ title, setTitle, content, setContent, createPost }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost();
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      ></textarea>
      <CreatePostButton />
    </form>
  );
}

export default PostForm;
