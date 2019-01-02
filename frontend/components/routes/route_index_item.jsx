import React from 'react';
import { Link } from 'react-router-dom';

import DeleteRouteModal from './delete_route_modal';

class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModalOpen: false,
    }
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
  }

  formatRouteCreationDate() {
    let dateTime = this.props.skateRoute.createdAt;
    let separatedDateTime = dateTime.split('-');
    let day = separatedDateTime[2].slice(0,2);
    let formattedDate = `${day}/${separatedDateTime[1]}/${separatedDateTime[0]}`;

    return formattedDate;
  }

  showDeleteModal() {
    this.setState({ deleteModalOpen: true });
  }

  hideDeleteModal() {
    this.setState({ deleteModalOpen: false });
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
          <a onClick={this.showDeleteModal}>
            <span>Delete</span>
          </a>
          <DeleteRouteModal
            show={this.state.deleteModalOpen}
            deleteSkateRoute={ () => this.props.deleteSkateRoute(skateRoute.id) }
            hide={this.hideDeleteModal}/>
        </td>
      </tr>
    )
  }
}

export default RouteIndexItem;
