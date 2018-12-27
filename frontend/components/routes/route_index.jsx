import React from 'react';
import { Link } from 'react-router-dom';

import RouteIndexItem from './route_index_item';

class RouteIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSkateRoutes();
  }

  render() {
    const skateRoutes = Object.values(this.props.skateRoutes);

    return (
      <div className="middle-container">
        <div className="my-routes-title-container">
          <h3 className="my-routes-title"><span>MY ROUTES</span></h3>
          <div className="create-route">
            <Link className="nav-login-logout" to="/routes/create">
              <button className="create-route-button">CREATE A ROUTE</button>
            </Link>

          </div>
        </div>

      <section className="results-container">
        <ul>
          {skateRoutes.map(route => <RouteIndexItem key={route.id} skateRoute={route} />)}
        </ul>
      </section>
      </div>
    );
  }
}

export default RouteIndex;
