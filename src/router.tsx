import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import FilmPage from "./pages/films/FilmPage";
import JediIdPage from "./pages/people/JediIdPage";

import JediPage from "./pages/people/JediPage";
import PlanetPage from "./pages/planet/PlanetPage";
import RootPage from "./pages/RootPage";
import SpeciesPage from "./pages/species/SpeciesPage";
import StarShipPage from "./pages/starship/StarshipPage";
import VehiclePage from "./pages/vehicles/VehiclePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/films/",
    element: <FilmPage />,
  },
  {
    path: "/jedi/",
    element: <JediPage />,
  },
  {
    path: "/jedi/:id",
    element: <JediIdPage />,
  },
  {
    path: "/planets/",
    element: <PlanetPage />,
  },
  {
    path: "/species/",
    element: <SpeciesPage />,
  },
  {
    path: "/starship/",
    element: <StarShipPage />,
  },
  {
    path: "/vehicles/",
    element: <VehiclePage />,
  },
]);
