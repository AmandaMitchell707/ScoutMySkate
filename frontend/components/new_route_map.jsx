import React from 'react';

class NewRouteMap extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
  }

  componentDidMount() {

    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13,
    };

    // wrap this.mapNode in a Google Map
    let map = new google.maps.Map(this.mapNode, mapOptions);
    let infoWindow = new google.maps.InfoWindow;

    let pos;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      });
    }
    this.map = map;
    this.addMarker({ lat: 37.7990, lng: -122.4014 });

    this.map.addListener('click', event => {
      this.addMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() })
    });

  }

  addMarker(coords) {
    // debugger;
    let marker = new google.maps.Marker({
      position: coords,
      map: this.map,
    });
  }

  render() {

    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default NewRouteMap;
