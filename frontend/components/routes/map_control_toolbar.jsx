import React from 'react';
import MarkerManager from '../../util/marker_manager';

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
          <div className="top-row">
          </div>
          <div className="bottom-row">
          </div>
        </div>
      </div>
    );
  }
}

export default MapControlToolbar;
