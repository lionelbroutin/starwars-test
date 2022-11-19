import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import FilmIdPage from "./pages/films/FilmIdPage";
import FilmPage from "./pages/films/FilmPage";
import JediIdPage from "./pages/people/JediIdPage";

import JediPage from "./pages/people/JediPage";
import PlanetPage from "./pages/planet/PlanetPage";
import RootPage from "./pages/RootPage";
import SpeciesIdPage from "./pages/species/SpeciesIdPage";
import SpeciesPage from "./pages/species/SpeciesPage";
import StarShipPage from "./pages/starship/StarshipPage";
import VehiclePage from "./pages/vehicles/VehiclePage";
import StarShipIdPage from "./pages/starship/StarshipIdPage";
import PlanetIdPage from "./pages/planet/PlanetIdPage";
import VehicleIdPage from "./pages/vehicles/VehicleIdPage";

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
    path: "/films/:id",
    element: <FilmIdPage />,
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
    path: "/planets/:id",
    element: <PlanetIdPage />,
  },
  {
    path: "/species/",
    element: <SpeciesPage />,
  },
  {
    path: "/species/:id",
    element: <SpeciesIdPage />,
  },
  {
    path: "/starship/",
    element: <StarShipPage />,
  },
  {
    path: "/starship/:id",
    element: <StarShipIdPage />,
  },
  {
    path: "/vehicles/",
    element: <VehiclePage />,
  },
  {
    path: "/vehicles/:id",
    element: <VehicleIdPage />,
  },
]);
