import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import TopMOvies from "./Pages/TopMOvies";
import Rewardmovies from "./Pages/Rewardmovies";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/topmovies",
        element: <TopMOvies></TopMOvies>,
      },
      {
        path: "/awardmovies",
        element: <Rewardmovies></Rewardmovies>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
