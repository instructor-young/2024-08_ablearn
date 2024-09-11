import posts from "../../data/posts.json";

export const POSTS_CREATE_POST = "POSTS/CREATE_POST";

export const createPost = (newPost) => ({
  type: POSTS_CREATE_POST,
  payload: newPost,
});

const initialState = {
  posts,
  filters: {},
};

function postsReducer(state = initialState, action) {
  if (action.type === POSTS_CREATE_POST) {
    const newPost = { ...action.payload, id: Date.now() };
    const posts = [newPost, ...state.posts];
    const newState = { ...state, posts };

    return newState;
  }

  return state;
}

export default postsReducer;
