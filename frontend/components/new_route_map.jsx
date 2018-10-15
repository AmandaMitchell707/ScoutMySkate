import React from 'react';

class NewRouteMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13,
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);

    // add App Academy marker
    this.addMarker({ lat: 37.7990, lng: -122.4014 });

    let mapCenter;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        mapCenter = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.map.setCenter(mapCenter);
      });
    } else {
      mapCenter = { lat: 37.7758, lng: -122.435 };
    }
    // google.maps.event.addListener(this.map, 'click',
    //   (event => addMarker({ coords: event.latlng }));

  }

  addMarker(coords) {
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
