import React from "react";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import { Navigate } from "react-router-dom";
import ForgotPassword from "../components/Auth/ForgotPassword";
import Notes from "../components/Notes/Notes";
import DisplayNotes from "../components/DisplayNotes/DisplayNotes";
import ShareNotes from "../components/ShareNotes/ShareNotes";
export function authRoute() {
  return [
    { path: "/signin", element: <Login /> },
    { path: "/signup", element: <Register /> },
    { path: "/resetpassword", element: <ForgotPassword /> },
    { path: "/share-notes", element: <ShareNotes /> },
  ];
}
export function protectedRoutes(isAuthenticate) {
  return [
    {
      path: "/",
      element: isAuthenticate ? <Notes /> : <Navigate to="/signin" />,
    },
    {
      path: "/notes/:userId",
      element: isAuthenticate ? <DisplayNotes /> : <Navigate to="/signin" />,
    },
    {},
  ];
}
