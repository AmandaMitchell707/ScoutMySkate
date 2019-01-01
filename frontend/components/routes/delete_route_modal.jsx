import React from 'react';

class DeleteRouteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false;
    }
  }

  render() {
    if (this.state.modalOpen === false) {
      return null;
    } else {
      return (
        <div className="modal-background">
          <div className="modal-child">
            
          </div>
        </div>
      );
    }
  }
}

export default DeleteRouteModal;
