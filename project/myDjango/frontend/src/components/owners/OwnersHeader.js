import React, { Component } from "react";
import { Alert } from 'reactstrap';


class OwnersHeader extends Component {
  render() {
    return (
      <div className="text-center">
        <Alert color="dark">
          <h3>Владельцы</h3>
        </Alert>
      </div>
    );
  }
}

export default OwnersHeader;