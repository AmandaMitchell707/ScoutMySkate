import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="nav-bar-inner">
      <p>{currentUser.fname} {currentUser.lname}</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="green-button" to="/auth/signup">SIGN UP</Link>
      <Link className="grey-button" to="/auth/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar-outer">
      <div>
        <Link className="logo" to="/">Scout My Skate</Link>
        {display}
      </div>
    </header>
  );
};
