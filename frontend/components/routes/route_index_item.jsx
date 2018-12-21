import React from 'react';
import { Link } from 'react-router-dom';

class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const skateRoute = this.props.skateRoute;

    return (
      <li>
        <Link to={`/routes/view/${skateRoute.id}`}>
          <div>{skateRoute.name}</div>
          <div>{skateRoute.distance}</div>
          <div>{skateRoute.city}</div>
          <div>{skateRoute.createdAt}</div>
        </Link>
      </li>
    )
  }
}

export default RouteIndexItem;
