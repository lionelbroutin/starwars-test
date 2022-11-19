import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

type PropsType = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: PropsType) {
  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Page d'accueil</Link>
            </li>

            <li>
              <Link to="/films">Films</Link>
            </li>
            <li>
              <Link to="/jedi">Jedis</Link>
            </li>
            <li>
              <Link to="/planets">Planètes</Link>
            </li>
            <li>
              <Link to="/vehicles">Véhicules</Link>
            </li>
            <li>
              <Link to="/starship">Vaisseaux</Link>
            </li>
            <li>
              <Link to="/species">Espèces</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </main>
  );
}
