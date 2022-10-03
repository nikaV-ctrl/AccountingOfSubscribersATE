import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StreetsList from "./StreetsList";
import NewStreetsModal from "./NewStreetsModal";
import axios from "axios";
import { API_URL_STREETS } from "../../constants";


class StreetsHome extends Component {
  state = {
    streets: []
  };

  componentDidMount() {
    this.resetState();
  }

  getStreets = () => {
    axios.get(API_URL_STREETS).then(res => this.setState({ streets: res.data }));
  };

  resetState = () => {
    this.getStreets();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <StreetsList
              streets={this.state.streets}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewStreetsModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StreetsHome;