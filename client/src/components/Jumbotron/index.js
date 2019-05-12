import React from "react";
import { Link } from 'react-router-dom';

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "lightgrey" }}
      className="jumbotron"
    ><h1>Page Not Found</h1>
    <br />
    <p>
      <Link to="/">
      Back to Home page
      </Link>
      </p>
    </div>
  );
}

export default Jumbotron;