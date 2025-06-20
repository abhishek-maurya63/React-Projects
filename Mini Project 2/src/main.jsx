import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Recipecontext from "./Context/Recipecontext.jsx";


createRoot(document.getElementById("root")).render(
  <Recipecontext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Recipecontext>
);
