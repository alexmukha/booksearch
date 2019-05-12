import React from "react";
import { Link } from 'react-router-dom';


const Nav = props => (
  <div>
    <nav className="navbar fixed-top" style={{ marginBottom: "40px", backgroundColor: "lightgrey", height: "70px", textDecoration: "none" }}>
      <ul className="nav navbar-nav navbar-left">
        <li>
          <Link to="/" style={{ textDecoration: "none"}}>
        <span style={{family: "Century Gothic", fontWeight: "bold", fontSize: "40px"}}><font color="#4285f4">G</font><font color="#ea4335">o</font><font color="#fbbc05">o</font><font color="#4285f4">g</font><font color="#34a853">l</font><font color="#ea4335">e</font> </span>
        <span style={{family: "Century Gothic", fontWeight: "bold", fontSize: "12px"}}><font color="#4285f4">B</font><font color="#ea4335">o</font><font color="#fbbc05">o</font><font color="#34a853">k</font><font color="#ea4335">s</font> </span>
          </Link>
        </li>
      </ul>

      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/savedbooks" style={{ textDecoration: "none", fontSize: "20px" }}>
            Saved Books
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
