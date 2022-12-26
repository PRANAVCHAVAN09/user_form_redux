import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderPost = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderPost}
    </section>
  );
};

export default PostList;
