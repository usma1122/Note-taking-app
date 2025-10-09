import React from "react";
import { RouterProvider } from "react-router-dom";
import { getRoutes } from "./routes/index.js";
import { createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector(
    (state) => state.auth.user?.stsTokenManager.refreshToken
  );

  const router = createBrowserRouter(getRoutes(token));
  return <RouterProvider router={router} />;
}

export default App;
