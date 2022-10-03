import React, { Component } from "react";
import { Alert } from 'reactstrap';


class PaymentHeader extends Component {
  render() {
    return (
      <div className="text-center">
        <Alert color="dark">
          <h3>Оплата</h3>
        </Alert>
      </div>
    );
  }
}

export default PaymentHeader;