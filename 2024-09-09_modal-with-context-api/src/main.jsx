import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ModalProvider } from "./contexts/modal.context";
import { ThemeProvider } from "./contexts/theme.context";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </ThemeProvider>
);
