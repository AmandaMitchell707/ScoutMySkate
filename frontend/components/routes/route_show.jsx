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
      this.initMap();
    }

    if (prevProps.match.params.routeId !== this.props.match.params.routeId) {
      this.props.fetchSkateRoute(this.props.match.params.routeId);
    }
  }

  initMap() {
    let route = google.maps.geometry.encoding.decodePath(this.props.skateRoute.polyline);
    let distanceInMeters = google.maps.geometry.spherical.computeLength(route);
    this.distanceInMiles = (distanceInMeters / 1609.344).toFixed(2);

    const mapOptions = {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    let map = new google.maps.Map(this.refs.map, mapOptions);
    this.directionsDisplay.setMap(map);
    this.createRouteMarkers(route, map);

    // const newPolyline = new google.maps.Polyline({
    //   path: route,
    //   strokeColor: 'red',
    //   strokeOpacity: 0.5,
    //   strokeWeight: 4,
    // });
    //
    // newPolyline.setMap(map);
    // debugger;
    this.calcAndDisplayRoute(this.directionsService, this.directionsDisplay);
    this.map = map;
  }

  createRouteMarkers(route, map) {
    route.map((el, idx) => {
      let lat = el.lat();
      let lng = el.lng();

      let iconScale = 4;
      if (idx !== 0 && idx < route.length - 1) {
        iconScale = 0;
      }

      let marker = new google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: map,
          icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: iconScale,
          }
      });

      this.markers.push(marker);
    });
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
