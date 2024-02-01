// import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/classPage">Class Page</Link>
          </li>
          <li>
            <Link to="/playerPage">Player Page</Link>
          </li>
          <li>
            <Link to="/matchesPage">Matches Page</Link>
          </li>
          <li>
            <Link to="/aboutPage">About Page</Link>
          </li>
          <li>
            <Link to="/contactPage">Contact Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
