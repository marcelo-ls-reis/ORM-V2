import React from "react";
import { Link } from "react-router-dom"

import "./MenuHorizontal.css"

function MenuHorizontal() {
  return (
    <div className="menuHorizontal">
      <nav className="navMenu">
        <ul>
          <li> <Link to="/">Início </Link> </li>          
          <li> <Link to="/categorias">Categorias </Link> </li>
          <li> <Link to="/departamentos">Departamentos </Link> </li>          
        </ul>
      </nav>
    </div>
  );
}

export default MenuHorizontal;
