import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";

const routerObj = createBrowserRouter(router);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routerObj} />
  </StrictMode>
);
