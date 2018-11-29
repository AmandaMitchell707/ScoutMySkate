import React from 'react';
import { Route } from 'react-router-dom';


class RouteShow extends React.Component {
  constructor(props) {
    super(props);

    this.map = null;
    this.markers = [];
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: 'red',
        strokeOpacity: 0.5,
        strokeWeight: 4,
      },
    });
  }

  componentDidMount() {
    this.props.fetchSkateRoute(this.props.match.params.routeId)
      .then((action) => (
        this.props.fetchUser(action.skateRoute.authorId)
      ));
  }

  componentDidUpdate(prevProps) {
    if (this.props.skateRoute) {
      this.decodeMarkers();
      this.initMap();
    }

    if (prevProps.match.params.routeId !== this.props.match.params.routeId) {
      this.props.fetchSkateRoute(this.props.match.params.routeId);
    }
  }

  initMap() {
    this.distanceInMiles = this.props.skateRoute.distance;

    const mapOptions = {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    let map = new google.maps.Map(this.refs.map, mapOptions);
    this.directionsDisplay.setMap(map);
    this.calcAndDisplayRoute(this.directionsService, this.directionsDisplay);
    this.map = map;
  }

  decodeMarkers() {
    let coordinateList = this.props.skateRoute.encodedMarkers.split(',').map(Number);

    for (let i = 0; i < coordinateList.length; i += 2) {
      let coords = { lat: coordinateList[i], lng: coordinateList[i + 1] };
      let marker = new google.maps.Marker({
        position: coords,
        map: this.map,
        icon: {
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
          scale: 0,
        },
      });

      this.markers.push(marker);
    }
  }

  calcAndDisplayRoute(directionsService, directionsDisplay) {
    let start = this.markers[0].position;
    let end = this.markers[this.markers.length - 1].position;
    let waypoints = [];

    for (let i = 1; i < this.markers.length - 1; i++) {
      waypoints.push({
        location: this.markers[i].position,
        stopover: false,
      });
    }

    const request = {
      origin: start,
      waypoints: waypoints,
      destination: end,
      travelMode: google.maps.DirectionsTravelMode.WALKING,
    };

    this.directionsService.route(request, (response, status) => {
      if (status == 'OK') {
        this.directionsDisplay.setDirections(response);
      }
    });
  }

  render() {
    if (!this.props.skateRoute) return null;

    return (
      <div className="map-page">
        <section className="route-show">
          <h1>{this.props.skateRoute.name}</h1>
          <ul className="route-details">
            <li>BEGINS AT: {this.props.skateRoute.city}</li>
            <li>CREATED BY: {this.props.author.firstName} {this.props.author.lastName}</li>
            <li>DISTANCE: {this.distanceInMiles} miles</li>
          </ul>
          <div id='show-map-container' ref="map" />
        </section>
      </div>
    );
  }
}

export default RouteShow;
