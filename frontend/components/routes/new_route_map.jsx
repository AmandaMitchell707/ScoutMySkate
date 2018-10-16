import React from 'react';

class NewRouteMap extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.markers = [];
  }

  componentDidMount() {
    this.initMap();
    // this.addMarker({ lat: 37.7990, lng: -122.4014 });
  }

  initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    let map = new google.maps.Map(this.mapNode, mapOptions);
    let infoWindow = new google.maps.InfoWindow;

    // set map center to user's current position, or SF if position not given
    let pos;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      });
    }

    directionsDisplay.setMap(map);
    this.map = map;

    this.map.addListener('click', event => {
      this.addMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      this.calcAndDisplayRoute(directionsService, directionsDisplay);
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
            scale: iconScale
        }
    });

    this.markers.push(marker);
  }

  calcAndDisplayRoute(directionsService, directionsDisplay) {
    if (this.markers.length === 1) {
      return;
    }

    let start = this.markers[0].position;
    // this.markers[0].icon = {
    //   path: google.maps.SymbolPath.CIRCLE,
    //   scale: 0
    // }
    let end = this.markers[this.markers.length - 1].position;
    let waypoints = [];

    for (var i = 1; i < this.markers.length - 1; i++) {
      waypoints.push({
        location: this.markers[i].position,
        stopover: false
      });
    }


    const request = {
      origin: start,
      waypoints: waypoints,
      destination: end,
      travelMode: google.maps.DirectionsTravelMode.WALKING,
    };

    directionsService.route(request, (response, status) => {
      if (status == 'OK') {
        directionsDisplay.setDirections(response);
      }
    });
  }

  render() {

    return (
      <div className='new-map-page'>
        <section className='map-side-bar'>
          <p>Choose map location</p>
        </section>
        <div id='map-container' ref={ map => this.mapNode = map }></div>
      </div>
    );
  }
}

export default NewRouteMap;
