import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PhonenumbersList from "./PhonenumbersList";
import NewPhonenumbersModal from "./NewPhonenumbersModal";
import axios from "axios";
import { API_URL_PHONENUMBERS } from "../../constants";


class PhonenumbersHome extends Component {
  state = {
    phonenumbers: []
  };

  componentDidMount() {
    this.resetState();
  }

  getPhonenumbers = () => {
    axios.get(API_URL_PHONENUMBERS).then(res => this.setState({ phonenumbers: res.data }));
  };

  resetState = () => {
    this.getPhonenumbers();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <PhonenumbersList
              phonenumbers={this.state.phonenumbers}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewPhonenumbersModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PhonenumbersHome;