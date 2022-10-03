import React, { Component } from "react";
import { Alert } from 'reactstrap';


class PairednumbersHeader extends Component {
  render() {
    return (
      <div className="text-center">
        <Alert color="dark">
          <h3>Спаренные номера</h3>
        </Alert>
      </div>
    );
  }
}

export default PairednumbersHeader;