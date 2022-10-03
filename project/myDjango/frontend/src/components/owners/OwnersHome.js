import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import OwnersList from "./OwnersList";
import NewOwnersModal from "./NewOwnersModal";
import axios from "axios";
import { API_URL_OWNERS } from "../../constants";



class OwnersHome extends Component {
  state = {
    owners: []
  };

  componentDidMount() {
    this.resetState();
  }

  getOwners = () => {
    axios.get(API_URL_OWNERS).then(res => this.setState({ owners: res.data }));
  };

  resetState = () => {
    this.getOwners();
  };



  render() {
    return (
      <div>
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Col>
              <OwnersList
                owners={this.state.owners}
                resetState={this.resetState}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <NewOwnersModal create={true} resetState={this.resetState} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OwnersHome;