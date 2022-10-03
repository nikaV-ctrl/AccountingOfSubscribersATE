import React, { Component } from "react";
import { Alert } from 'reactstrap';


class StreetsHeader extends Component {
  render() {
    return (
      <div className="text-center">
        <Alert color="dark">
          <h3>Улицы</h3>
        </Alert>
      </div>
    );
  }
}

export default StreetsHeader;