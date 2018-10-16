import React from 'react';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 },
  zoom: 15,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  draggableCursor: 'crosshair',
};

class RouteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      polyline: '',
    };

    this.map = null;
    this.markers = [];
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({ preserveViewport: true });
  }

  componentDidMount() {
    this.initMap();
  }

  setUsersPosition(map) {
    let pos;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.setCenter(pos);
      });
    }
  }

  initMap() {
    let map = new google.maps.Map(this.refs.map, mapOptions);
    this.setUsersPosition(map);
    this.directionsDisplay.setMap(map);
    this.map = map;

    this.map.addListener('click', event => {
      this.addMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      this.calcAndDisplayRoute(this.directionsService, this.directionsDisplay);
    });
  }

  addMarker(coords) {
    let iconScale = 4;
    if (this.markers.length > 0) {
      iconScale = 0;
    }

    let marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      icon: {
            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: iconScale,
      }
    });

    this.markers.push(marker);
  }

  clearMap(e) {
    e.preventDefault();
    this.markers = [];
    this.calcAndDisplayRoute(this.directionsService, this.directionsDisplay);
  }

  calcAndDisplayRoute(directionsService, directionsDisplay) {
    if (this.markers.length === 1) return;

    let start = this.markers[0].position;
    let end = this.markers[this.markers.length - 1].position;
    let waypoints = [];

    for (var i = 1; i < this.markers.length - 1; i++) {
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
        this.setState({ polyline: response.routes[0].overview_polyline });
      }
    });
  }

  render() {
    debugger;
    return (
      <div className='new-map-page'>
        <section className='map-side-bar'>
          <p>Choose map location</p>
        </section>
        <div id='map-container' ref="map"></div>
      </div>
    );
  }
}

export default RouteForm;
