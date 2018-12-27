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
      <tr>
        <td className="thumbnail-cell">
          <Link to={`/routes/view/${skateRoute.id}`}>
            <img alt="route-map"></img>
          </Link>
        </td>
        <td>
          <Link to={`/routes/view/${skateRoute.id}`}>
            <span>{creationDate}</span>
          </Link>
        </td>
        <td>
          <span>{skateRoute.distance} mi</span>
        </td>
        <td>
          <Link to={`/routes/view/${skateRoute.id}`}>
            <span>{skateRoute.name}</span>
          </Link>
        </td>
        <td>
          <span>{skateRoute.city}</span>
        </td>
        <td>
          options go here
        </td>
      </tr>
    )
  }
}

export default RouteIndexItem;
