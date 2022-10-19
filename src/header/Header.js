import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Moves</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <Link to="/moves">Moves</Link>
    <Link to="/login" className="mx-3">Log in</Link>
    <Link to="/register">Register</Link>
    {/* <Link to="/">Moves</Link> */}

    
    </div>
  </div>
</nav>
      </>
    );
  };

export default Header;
