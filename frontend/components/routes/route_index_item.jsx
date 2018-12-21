import React from 'react';
import { Link } from 'react-router-dom';

class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  formatRouteCreationDate() {
    let dateTime = this.props.skateRoute.createdAt;
    let separatedDateTime = dateTime.split('-');
    let day = separatedDateTime[2].slice(0,2);
    let formattedDate = `${day}/${separatedDateTime[1]}/${separatedDateTime[0]}`;
    
    return formattedDate;
  }

  render() {
    const skateRoute = this.props.skateRoute;
    let creationDate = this.formatRouteCreationDate();

    return (
      <li>
        <Link to={`/routes/view/${skateRoute.id}`}>
          <div>{skateRoute.name}</div>
          <div>{skateRoute.distance}</div>
          <div>{skateRoute.city}</div>
          <div>{creationDate}</div>
        </Link>
      </li>
    )
  }
}

export default RouteIndexItem;
