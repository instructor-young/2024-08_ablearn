import { useContext } from "react";
import { ThemeContext } from "../App";
import ModalA from "../components/ModalA/ModalA";
import { useModal } from "../contexts/modal.context";

function HomePage() {
  console.log("HomePage. 나 함수 호출됨");
  const modal = useModal();

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      id="app"
      className={
        "h-screen " +
        `${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`
      }
    >
      <header className="p-5 bg-lime-100">
        <h1 className="text-5xl text-black">Modal With Context API</h1>
      </header>

      <main className="py-10 px-5">
        <section>
          <h2 className="text-3xl">Context API는 세 가지만 기억해라</h2>

          <ol className="list-inside list-decimal text-lg">
            <li>만든다</li>
            <li>사용한다</li>
            <li>범위를 지정해서 값을 내려준다</li>
          </ol>
        </section>

        <section className="mt-10 flex gap-x-5">
          <button
            onClick={() => modal.open(<ModalA />)}
            className="bg-blue-400 text-white px-3 py-2 rounded-md font-bold text-lg hover:brightness-90 active:brightness-75"
          >
            모달A 띄우기
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="bg-blue-400 text-white px-3 py-2 rounded-md font-bold text-lg hover:brightness-90 active:brightness-75"
          >
            라이트 모드 / 다크모드
          </button>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
