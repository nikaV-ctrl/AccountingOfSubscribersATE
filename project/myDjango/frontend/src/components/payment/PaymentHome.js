import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PaymentList from "./PaymentList";
import NewPaymentModal from "./NewPaymentModal";
import axios from "axios";
import { API_URL_PAYMENT } from "../../constants";


class PaymentHome extends Component {
  state = {
    payment: []
  };

  componentDidMount() {
    this.resetState();
  }

  getPayment = () => {
    axios.get(API_URL_PAYMENT).then(res => this.setState({ payment: res.data }));
  };

  resetState = () => {
    this.getPayment();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <PaymentList
              payment={this.state.payment}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewPaymentModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PaymentHome;