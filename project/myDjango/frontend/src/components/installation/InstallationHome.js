import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import InstallationList from "./InstallationList";
import NewInstallationModal from "./NewInstallationModal";
import axios from "axios";
import { API_URL_INSTALLATION } from "../../constants";


class InstallationHome extends Component {
  state = {
    installation: []
  };

  componentDidMount() {
    this.resetState();
  }

  getInstallation = () => {
    axios.get(API_URL_INSTALLATION).then(res => this.setState({ installation: res.data }));
  };

  resetState = () => {
    this.getInstallation();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <InstallationList
              installation={this.state.installation}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewInstallationModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default InstallationHome;