import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Index from "./pages";
import PersonIndexPage from "./pages/person/PersonIndexPage";
import PersonPage from "./pages/person/PersonPage";
import Person from "./pages/person/PersonPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/person/",
    element: <PersonIndexPage />,
  },
  {
    path: "/person/:id",
    element: <PersonPage />,
  },
]);
