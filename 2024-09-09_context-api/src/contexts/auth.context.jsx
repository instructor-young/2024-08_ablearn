/* eslint-disable react/prop-types */
// #1. 만든다
import { createContext, useState } from "react";

const initialValue = {
  isLoggedIn: false,
  currentUser: null,
  logIn: () => {},
  signUp: () => {},
};
export const AuthContext = createContext(initialValue);

// #2. 사용한다
// useContext(context)

// #3. 범위를 지정해서 값을 내려준다.
export function AuthProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(initialValue.currentUser);
  const isLoggedIn = !!currentUser;

  const signUp = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const logIn = (credential) => {
    const { id, password } = credential;
    const user = users.find((user) => user.id === id);
    if (!user) return alert("잘못된 ID 입니다.");
    if (user.password !== password) return alert("잘못된 PW 입니다.");

    setCurrentUser(user);
  };

  const value = {
    isLoggedIn,
    currentUser,
    signUp,
    logIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
