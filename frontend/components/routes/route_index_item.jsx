import React from 'react';
import { Link } from 'react-router-dom';

const RouteIndexItem = ({ skateRoute }) => (
  <li>
    <Link to={`/routes/view/${skateRoute.id}`}>
      <div>{skateRoute.name}</div>
      <div>{skateRoute.distance}</div>
    </Link>
  </li>
);

export default RouteIndexItem;
