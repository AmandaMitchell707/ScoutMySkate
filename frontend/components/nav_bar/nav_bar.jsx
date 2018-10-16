import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="right-nav">
      <button className="nav-login-logout" onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="right-nav">
      <Link className="nav-login-logout" to="/auth/login">Log In</Link>
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
