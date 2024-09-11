import { createContext, useState } from "react";
import Button from "./components/Button/Button";
import HomePage from "./pages/HomePage";

export const ThemeContext = createContext();

function App() {
  console.log("App. 나 함수 호출됨.");
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HomePage />
      <Button />
    </ThemeContext.Provider>
  );
}

export default App;
