import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="right-nav">
      <Link className="nav-buttons" to="/routes/my_routes">My Routes</Link>
      <Link className="nav-buttons" to="/routes/create">Create Route</Link>
      <button className="nav-signup" onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="right-nav">
      <Link className="nav-buttons" to="/auth/login">Log In</Link>
      <Link className="nav-signup" to="/auth/signup">SIGN UP</Link>
    </div>
  );

  return (
    <nav className="nav-bar-outer">
      <nav className="nav-bar-inner">
      <div className="left-nav">
        <Link className="logo" to="/">

          <img className="skate-logo" src={window.images.logo} alt="logo"></img>
          <h1 className="scout">SCOUT MY SKATE</h1>
        </Link>
      </div>
      {display}
      </nav>
    </nav>
  );
};
