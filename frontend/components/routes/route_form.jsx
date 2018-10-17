import React from 'react';
import MapControlToolbar from './map_control_toolbar';

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
      authorId: this.props.currentUser.id,
      distance: 0,
      elevation: 0,
      name: '',
      city: '',
      polyline: '',
      location: '',
      searchLocation: null,
    };

    this.map = null;
    this.markers = [];
    this.autocomplete = null;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({ preserveViewport: true });
    this.geocoder = new google.maps.Geocoder();
    this.addLocationAutocomplete = this.addLocationAutocomplete.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.changeMapCenter = this.changeMapCenter.bind(this);
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
    this.addLocationAutocomplete();
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

  // undoMarker(e) {
  //   e.preventDefault();
  //   this.markers.pop();
  //   this.calcAndDisplayRoute(this.directionsService, this.directionsDisplay);
  // }
  //
  // clearMap(e) {
  //   e.preventDefault();
  //   this.markers = [];
  //   this.calcAndDisplayRoute(this.directionsService, this.directionsDisplay);
  // }

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

  update(property) {
    return e => this.setState({
      [property]: e.target.value,
    });
  }

  addLocationAutocomplete() {
    const locationInput = document.getElementById('location-form-input');
    this.autocomplete = new google.maps.places.Autocomplete(locationInput);
    this.autocomplete.addListener('place_changed', this.onLocationChange);
  }

  onLocationChange() {
    // debugger;
    let place = this.autocomplete.getPlace();
    if (place.geometry) {
      // debugger;
      this.setState({ searchLocation: place.geometry.location });
    } else {
      const locationInput = document.getElementById('location-form-input');
      locationInput.value = '';
      alert("There was a problem locating the address provided. Please check that the address is valid and try again.");
    }
  }

  changeMapCenter(e) {
    e.preventDefault();
    const locationInput = document.getElementById('location-form-input');

    this.geocoder.geocode({ 'address': this.state.location }, (results, status) => {
      this.map.setCenter(results[0].geometry.location);
    });
  }

  saveRoute(e) {
    e.preventDefault();

  }

  render() {
    return (
      <div className='new-map-page'>
        <section className='map-side-bar'>
          <form className="location-form" onSubmit={this.changeMapCenter}>
            <p>Choose map location</p>
            <input
              type="search"
              className="location-form-input"
              id="location-form-input"
              value={this.state.location}
              onChange={this.update('location')}
              placeholder="Address, City or Zip"
            />
            <button
              type="submit"
              className="location-form-submit"
            >SEARCH</button>
          </form>
        </section>
        <div id='map-container' ref="map"></div>
        <MapControlToolbar markers={this.markers}/>
      </div>
    );
  }
}

export default RouteForm;
