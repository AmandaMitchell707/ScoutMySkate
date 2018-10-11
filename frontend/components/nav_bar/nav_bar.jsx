import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>{currentUser.firstName} {currentUser.lastName}</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/auth/signup">SIGN UP</Link>
      <Link className="btn" to="/auth/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">Scout My Skate</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
