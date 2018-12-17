import React from 'react';

import RouteIndexItem from './route_index_item';

class RouteIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllSkateRoutes();
  }

  render() {
    if (this.props.skateRoutes) {
      console.log(this.props.skateRoutes);
    }

    const skateRoutes = Object.values(this.props.skateRoutes);

    return (
      <div>
        <ul>
          {skateRoutes.map(route => <RouteIndexItem key={route.id} skateRoute={route} />)}

        </ul>
      </div>
    );
  }
}

export default RouteIndex;
