import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { postAdded } from "./postSlice";

const AddPostForm = () => {
  const [title, settile] = useState("");
  const [content, setcontent] = useState("");
  const dispatch = useDispatch();
  const onsettitle = (e) => settile(e.target.value);
  const onsetcontent = (e) => setcontent(e.target.value);
  const onSavePost = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      settile("");
      setcontent("");
    }
  };
  return (
    <section>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onsettitle}
        ></input>

        <label htmlFor="postContent">Content:</label>
        <textarea
          value={content}
          onChange={onsetcontent}
          id="postContent"
          name="postContent"
        ></textarea>
        <button type="button" onClick={onSavePost}>
          save
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
