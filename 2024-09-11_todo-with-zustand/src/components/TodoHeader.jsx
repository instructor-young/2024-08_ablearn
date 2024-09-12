import { IoCreateOutline } from "react-icons/io5";
import { useNavigate } from "../zustand/stores/router.store";

function TodoHeader() {
  const navigate = useNavigate();

  return (
    <header className="px-4 py-2 border-b border-black flex justify-between items-center">
      <h1 className="font-bold">
        <button onClick={() => navigate("list")}>TODO</button>
      </h1>

      <button onClick={() => navigate("new")}>
        <IoCreateOutline className="text-xl" />
      </button>
    </header>
  );
}

export default TodoHeader;
