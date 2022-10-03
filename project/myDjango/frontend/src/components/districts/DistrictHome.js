import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import DistrictsList from "./DistrictsList";
import NewDistrictsModal from "./NewDistrictsModal";
import axios from "axios";
import { API_URL_DISTRICT } from "../../constants";



class DistrictHome extends Component {
  state = {
    districts: []
    };


  componentDidMount() {
    this.resetState();
  }

  getDistricts = () => {
    axios.get(API_URL_DISTRICT).then(res => this.setState({ districts: res.data }));
  };

  resetState = () => {
    this.getDistricts();
  };



  render() {
    return (
      <div>
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Col>
              <DistrictsList
                districts={this.state.districts}
                resetState={this.resetState}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <NewDistrictsModal create={true} resetState={this.resetState} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DistrictHome;