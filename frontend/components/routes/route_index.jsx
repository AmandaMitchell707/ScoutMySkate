import React from 'react';

class RouteIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllSkateRoutes();
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
 export default RouteIndex;
