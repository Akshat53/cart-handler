import React from "react";
import { Link } from "react-router-dom";
import Home from "../view/Home";
import User from "../view/User";

const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/user",
    component: <User />,
  },
];

export { routes };
