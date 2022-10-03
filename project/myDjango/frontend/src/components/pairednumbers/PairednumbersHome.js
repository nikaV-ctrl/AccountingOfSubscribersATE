import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PairednumbersList from "./PairednumbersList";
import NewPairednumbersModal from "./NewPairednumbersModal";
import axios from "axios";
import { API_URL_PAIREDNUMBERS } from "../../constants";


class PairednumbersHome extends Component {
  state = {
    pairednumbers: []
  };

  componentDidMount() {
    this.resetState();
  }

  getPairednumbers = () => {
    axios.get(API_URL_PAIREDNUMBERS).then(res => this.setState({ pairednumbers: res.data }));
  };

  resetState = () => {
    this.getPairednumbers();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <PairednumbersList
              pairednumbers={this.state.pairednumbers}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewPairednumbersModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PairednumbersHome;