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
    this.map.addListener('click', event => {
      this.addMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      this.calcRoute();
    });

  }

  initMap() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13,
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

    this.map = map;
  }

  addMarker(coords) {
    this.markers.push(coords);

    let marker = new google.maps.Marker({
      position: coords,
      map: this.map,
    });
  }

  calcRoute() {
    if (this.markers.length === 1) {
      return;
    }

    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(this.map);

    let start = this.markers[this.markers.length - 2];
    let end = this.markers[this.markers.length - 1];

    const request = {
      origin: start,
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
