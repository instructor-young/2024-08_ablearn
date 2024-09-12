import { createSlice } from "@reduxjs/toolkit";
import posts from "../../data/posts.json";

const initialState = {
  posts,
  filters: {},
};

const postsSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {
    createPost(state, action) {
      state.posts.push({ ...action.payload, id: Date.now() });
    },
    deletePost(state, action) {
      const postId = action.payload;
      const index = state.posts.findIndex((post) => post.id === postId);
      state.posts.splice(index, 1);
    },
    editPost(state, action) {
      const { id: postId, ...updatedPost } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      post.title = updatedPost.title;
      post.body = updatedPost.body;
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const { createPost, editPost, deletePost } = postsSlice.actions;
