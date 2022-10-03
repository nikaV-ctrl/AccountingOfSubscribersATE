import React, { Component } from "react";
import { Alert } from 'reactstrap';


class InstallationHeader extends Component {
  render() {
    return (
      <div className="text-center">
        <Alert color="dark">
          <h3>Установка</h3>
        </Alert>
      </div>
    );
  }
}

export default InstallationHeader;