import { createRoot } from "react-dom/client";
import { AuthProvider } from "./contexts/auth.context";
import "./index.css";
import Router from "./router";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Router />
  </AuthProvider>
);
