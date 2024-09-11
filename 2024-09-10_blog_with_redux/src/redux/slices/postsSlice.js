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
      state.posts.push(action.payload);
    },
    deletePost(state, action) {
      const postId = action.payload;
      const index = state.posts.findIndex((post) => post.id === postId);
      state.posts.splice(index, 1);
    },
  },
});

export const postsReducer = postsSlice.reducer;

export const { createPost } = postsSlice.actions;
