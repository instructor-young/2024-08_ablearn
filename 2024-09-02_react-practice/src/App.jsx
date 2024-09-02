import "./App.css";
import ColorSelector from "./components/ColorSelector";
import Counter from "./components/Counter";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <main>
      <SignUpForm />
      <hr />
      <Counter />
      <hr />
      <ColorSelector />
    </main>
  );
}

export default App;
