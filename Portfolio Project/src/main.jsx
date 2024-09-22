import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NewComponent from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewComponent />
  </StrictMode>,
);
