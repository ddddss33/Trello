import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Board from "../components/Board";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/list",
    element: <Board />,
  },
]);
