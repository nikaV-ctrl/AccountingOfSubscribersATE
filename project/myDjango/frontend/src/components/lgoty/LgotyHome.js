import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import LgotyList from "./LgotyList";
import NewLgotyModal from "./NewLgotyModal";
import axios from "axios";
import { API_URL_LGOTY } from "../../constants";


class LgotyHome extends Component {
  state = {
    lgoty: []
  };

  componentDidMount() {
    this.resetState();
  }

  getLgoty = () => {
    axios.get(API_URL_LGOTY).then(res => this.setState({ lgoty: res.data }));
  };

  resetState = () => {
    this.getLgoty();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <LgotyList
              lgoty={this.state.lgoty}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewLgotyModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LgotyHome;