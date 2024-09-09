import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";

function SignUpPage() {
  const idInputRef = useRef(null);
  const pwInputRef = useRef(null);
  const nicknameInputRef = useRef(null);
  const navigate = useNavigate();
  const { signUp } = useContext(AuthContext);

  const handleClickButton = () => {
    const id = idInputRef.current.value;
    const password = pwInputRef.current.value;
    const nickname = nicknameInputRef.current.value;

    const newUser = {
      id,
      password,
      nickname,
    };

    signUp(newUser);

    navigate("/");
  };

  return (
    <div>
      <input ref={idInputRef} type="text" placeholder="ID" />
      <input ref={pwInputRef} type="text" placeholder="Password" />
      <input ref={nicknameInputRef} type="text" placeholder="Nickname" />
      <button onClick={handleClickButton}>회원가입</button>
    </div>
  );
}

export default SignUpPage;
