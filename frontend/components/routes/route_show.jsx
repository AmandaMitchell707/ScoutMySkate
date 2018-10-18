import React from 'react';
import { Route } from 'react-router-dom';

class RouteShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchSkateRoute(this.props.match.params.routeId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.routeId !== this.props.match.params.routeId) {
      this.props.fetchSkateRoute(this.props.match.params.routeId);
    }
  }

  render() {
    debugger;
    return (
      <section className="route-show">
        <h2>{skateRoute.name}</h2>
        <ul>
          <li>BEGINS AT: {skateRoute.city}</li>
          <li>CREATED BY: {author.firstName} {author.lastName}</li>
          <li>DISTANCE: {skateRoute.distance} miles</li>
          <li>POLYLINE: {skateRoute.polyline}</li>
        </ul>
      </section>
    );
  }
}

export default RouteShow;
