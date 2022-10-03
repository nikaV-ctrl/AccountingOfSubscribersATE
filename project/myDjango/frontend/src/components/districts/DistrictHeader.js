import React, { Component } from "react";
import { Alert } from 'reactstrap';


class DistrictHeader extends Component {
  render() {
    return (
      <div className="text-center">
        <Alert color="dark">
          <h3>Районы</h3>
        </Alert>
      </div>
    );
  }
}

export default DistrictHeader;