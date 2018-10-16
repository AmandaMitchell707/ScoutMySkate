class MarkerManager {
  constructor(map, handleClick, markers) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = markers;
  }

  removeMarker(marker) {
    this.markers[this.markers.length - 1].setMap(null);
    this.markers.pop();
  }
}

export default MarkerManager;
