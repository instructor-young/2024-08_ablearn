const USERS_SIGN_UP = "USERS/SIGN_UP";

const initialState = {
  users: [],
  currentUser: null,
};

function usersReducer(state = initialState, action) {
  if (action.type === USERS_SIGN_UP) {
    const newUser = action.payload;
    const users = [...state.users, newUser];
    const newState = { ...state, users };

    return newState;
  }

  return state;
}

export default usersReducer;
