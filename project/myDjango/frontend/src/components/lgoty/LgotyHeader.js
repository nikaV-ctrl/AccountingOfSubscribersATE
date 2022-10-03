import React, { Component } from "react";
import { Alert } from 'reactstrap';


class LgotyHeader extends Component {
  render() {
    return (
      <div className="text-center">
        <Alert color="dark">
          <h3>Льготы</h3>
        </Alert>
      </div>
    );
  }
}

export default LgotyHeader;