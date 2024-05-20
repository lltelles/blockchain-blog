/* eslint-disable no-unused-vars */
import "./App.css";

import React, { useState, useEffect, useCallback } from "react";
import loadContract from "./ethers";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const App = () => {
  const [contract, setContract] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { contract, signer } = await loadContract();
      const account = await signer.getAddress();
      setContract(contract);
      // setSigner(signer);
      setAccount(account);
    };
    init();
  }, []);

  const createPost = async () => {
    if (contract) {
      await contract.createPost(title, content);
      loadPosts();
    }
  };

  const loadPosts = useCallback(async () => {
    if (contract) {
      const postCount = await contract.postCount();
      const postsArray = [];
      for (let i = 1; i <= postCount; i++) {
        const post = await contract.posts(i);
        postsArray.push(post);
      }
      setPosts(postsArray);
    }
  }, [contract]);

  useEffect(() => {
    if (contract) {
      loadPosts();
    }
  }, [contract, loadPosts]);

  return (
    <div>
      <h1>Blockchain Blog</h1>
      <PostForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        createPost={createPost}
      />
      <PostList posts={posts} />{" "}
    </div>
  );
};

export default App;
