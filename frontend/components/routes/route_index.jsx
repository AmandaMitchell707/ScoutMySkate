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
        <div className="my-routes-container">
          <div className="my-routes-title-container">
            <h3 className="my-routes-title"><span>MY ROUTES</span></h3>
            <Link className="nav-login-logout" to="/routes/create">
              <button className="create-route-button">CREATE A ROUTE</button>
            </Link>
          </div>

          <table className="results-container">
            <thead>
              <tr>
                <th className="thumbnail-cell"><span>Route</span></th>
                <th><span>Created</span></th>
                <th><span>Distance</span></th>
                <th><span>Name</span></th>
                <th><span>City</span></th>
                <th><span>Options</span></th>
              </tr>
            </thead>
            <tbody>
              {
                skateRoutes.map(route => (
                  <RouteIndexItem
                    key={route.id}
                    skateRoute={route}
                    deleteSkateRoute={this.props.deleteSkateRoute} />
                  )
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RouteIndex;
