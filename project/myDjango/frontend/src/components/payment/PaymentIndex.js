import React, { Component, Fragment } from "react";
import PaymentHeader from "./PaymentHeader";
import PaymentHome from "./PaymentHome";


class PaymentIndex extends Component {
    render() {
        return (
            <Fragment>
                <PaymentHeader />
                <PaymentHome />
            </Fragment>
        );
    }
}

export default PaymentIndex;