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
  }

  addMarker(coordinates) {
    let marker = new google.maps.Marker({
      position: coordinates,
      map: this.map,
    });
  }

  render() {
    this.addMarker({ lat: 37.7758, lng: -122.435 });

    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default NewRouteMap;
