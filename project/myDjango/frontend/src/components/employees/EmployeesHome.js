import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import EmployeesList from "./EmployeesList";
import NewEmployeesModal from "./NewEmployeesModal";
import axios from "axios";
import { API_URL_EMPLOYEES } from "../../constants";


class EmployeesHome extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.resetState();
  }

  getEmployees = () => {
    axios.get(API_URL_EMPLOYEES).then(res => this.setState({ employees: res.data }));
  };

  resetState = () => {
    this.getEmployees();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <EmployeesList
              employees={this.state.employees}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewEmployeesModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeesHome;