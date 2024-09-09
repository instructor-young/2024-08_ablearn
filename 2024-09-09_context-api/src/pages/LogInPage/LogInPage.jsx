import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";

function LogInPage() {
  const { logIn } = useContext(AuthContext);
  const idInputRef = useRef(null);
  const pwInputRef = useRef(null);
  const navigate = useNavigate();

  const handleClickButton = () => {
    const id = idInputRef.current.value;
    const password = pwInputRef.current.value;

    const credentials = { id, password };
    logIn(credentials);

    navigate("/");
  };

  return (
    <div>
      <input ref={idInputRef} type="text" placeholder="ID" />
      <input ref={pwInputRef} type="text" placeholder="Pw" />
      <button onClick={handleClickButton}>로그인</button>
    </div>
  );
}

export default LogInPage;
