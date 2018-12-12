import React from 'react';
import MapControlToolbar from './map_control_toolbar';

const mapOptions = {
  // default map center is San Francisco, CA
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
      name: '',
      city: 'San Francisco',
      // polyline: '',
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
    this.addMarker = this.addMarker.bind(this);
    this.encodeMarkers = this.encodeMarkers.bind(this);
    this.undoMarker = this.undoMarker.bind(this);
    this.clearMap = this.clearMap.bind(this);
    this.saveRoute = this.saveRoute.bind(this);
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
    let iconScale = 0;
    if (this.markers.length === 0) {
      this.geocoder.geocode({ 'location': coords }, (results, status) => {
        this.setState({ city: results[0].formatted_address });
      });
    }

    // let skateIcon = image-url("skate-icon.jpg");

    let marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      icon: {
            // path: skateIcon,
            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: iconScale,
      }
    });

    this.markers.push(marker);
  }

  undoMarker(e) {
    e.preventDefault();
    this.markers.pop();

    if (this.markers.length === 0) {
      this.clearMap();
    } else {
      this.calcAndDisplayRoute(this.directionsService, this.directionsDisplay);
    }
  }

  clearMap() {
    this.markers = [];
    this.directionsDisplay.setMap(null);
    this.directionsDisplay = null;
    this.setState({ distance : 0 });

    this.directionsDisplay = new google.maps.DirectionsRenderer({ preserveViewport: true });
    this.directionsDisplay.setMap(this.map);
  }

  calcAndDisplayRoute(directionsService, directionsDisplay) {
    // if (this.markers.length <= 1) return;

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

        let distanceInMeters = 0;
        response.routes[0].legs.forEach((leg) => distanceInMeters += leg.distance.value);

        this.setState({ distance: (distanceInMeters / 1609.344).toFixed(2) });
        // this.setState({ polyline: response.routes[0].overview_polyline });
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
    let place = this.autocomplete.getPlace();
    if (place.geometry) {
      this.setState({ location: place.formatted_address });

    } else {
      const locationInput = document.getElementById('location-form-input');
      locationInput.value = '';
      alert('There was a problem locating the address provided. Please check that the address is valid and try again.');
    }
  }

  changeMapCenter(e) {
    e.preventDefault();
    const locationInput = document.getElementById('location-form-input');

    this.geocoder.geocode({ 'address': this.state.location }, (results, status) => {
      this.setState({ city: results[0].formatted_address });
      this.map.setCenter(results[0].geometry.location);
      this.map.setZoom(14);
    });
  }

  encodeMarkers() {
    let markerString = '';
    this.markers.forEach(marker => {
      let latitude = marker.getPosition().lat();
      let longitude = marker.getPosition().lng();
      markerString += `${latitude},${longitude},`;
    });

    return markerString.slice(0, -1);
  }

  newRouteParams() {
    return {
      author_id: this.state.authorId,
      distance: this.state.distance,
      name: this.state.name,
      city: this.state.city,
      // polyline: this.state.polyline,
      encoded_markers: this.encodeMarkers(),
    };
  }

  saveRoute(e) {
    e.preventDefault();

    if (this.markers.length > 1) {
      this.props.createSkateRoute(this.newRouteParams())
        .then(data => this.props.history.push(`/routes/view/${data.skateRoute.id}`));
    } else {
      alert('You must have at least two points on the map to save a route.');
    }
  }

  render() {
    return (
      <div className='map-page'>
        <div className='map-side-bar'>
          <section className='left-pervasive'>
            <form className="location-search-container" onSubmit={this.changeMapCenter}>
              <label>Choose map location
                <div>
                  <input
                    type="search"
                    className="location-form-input"
                    id="location-form-input"
                    value={this.state.location}
                    onChange={this.update('location')}
                    placeholder="Address, City or Zip"
                  />
                <span className="mapping-api-sprite sprite-geolocate" alt="Target reticle"></span>
                </div>
              </label>
              <button
                type="submit"
                className="location-search"
              >SEARCH</button>
            </form>
          </section>
          <br />
          <form className="new-route-form" onSubmit={this.saveRoute}>
            <input
              type="text"
              className="name-input"
              id="location-form-input"
              value={this.state.name}
              onChange={this.update('name')}
              placeholder="Name this map"
            />
            <button
              type="submit"
              className="new-route-submit"
            >SAVE ROUTE</button>
          </form>
        </div>

        <div id='form-map-container' ref="map"></div>
        <MapControlToolbar
          markers={this.markers}
          undoMarker={this.undoMarker}
          clearMap={this.clearMap}
          distance={this.state.distance}
        />
      </div>
    );
  }
}

export default RouteForm;
