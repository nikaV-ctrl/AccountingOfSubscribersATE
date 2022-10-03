import React, { Component } from "react";
import { Alert } from 'reactstrap';


class PhonenumbersHeader extends Component {
  render() {
    return (
      <div className="text-center">
        <Alert color="dark">
          <h3>Телефоны</h3>
        </Alert>
      </div>
    );
  }
}

export default PhonenumbersHeader;