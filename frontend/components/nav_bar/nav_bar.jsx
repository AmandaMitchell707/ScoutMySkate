import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="right-nav">
      <p>{currentUser.firstName} {currentUser.lastName}</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="right-nav">
      <Link className="nav-login" to="/auth/login">Log In</Link>
      <Link className="nav-signup" to="/auth/signup">SIGN UP</Link>
    </div>
  );

  return (
    <nav className="nav-bar-outer">
      <div className="left-nav">
        <Link className="logo" to="/">Scout My Skate</Link>
      </div>
      {display}
    </nav>
  );
};
