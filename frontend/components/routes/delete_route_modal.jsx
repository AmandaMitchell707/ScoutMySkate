import React from 'react';

class DeleteRouteModal extends React.Component {
  render() {
    if (this.props.show === false) {
      return null;
    } else {
      return (
        <div className="modal-background">
          <div className="modal-child">
            <h3 className="modal-header">Delete Route?</h3>
            <div className="modal-body">
              <button onClick={this.props.deleteSkateRoute}>OK</button>
              <button onClick={this.props.hide}>Cancel</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default DeleteRouteModal;
