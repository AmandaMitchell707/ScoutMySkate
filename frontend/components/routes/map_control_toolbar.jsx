import React from 'react';

class MapControlToolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="toolbar-top">
          <div className="distance">
            <label>Distance</label>
            <h2 className="distance-display">
              {this.props.distance} mi
            </h2>
          </div>
        </div>
        <div className="toolbar-buttons">
          <button onClick={this.props.undoMarker}>Undo</button>
        </div>
      </div>
    );
  }
}

export default MapControlToolbar;
