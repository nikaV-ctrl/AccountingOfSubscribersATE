import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL_EMPLOYEES } from "../../constants";
import { MDBBtn } from 'mdb-react-ui-kit';


class NewEmployeesForm extends React.Component {
  state = {
    employee_code: 0,
    name: "",
  };

  componentDidMount() {
    if (this.props.employees) {
      const { employee_code, name } = this.props.employees;
      this.setState({ employee_code, name });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createEmployees = e => {
    e.preventDefault();
    axios.post(API_URL_EMPLOYEES, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editEmployees = e => {
    e.preventDefault();
    axios.put(API_URL_EMPLOYEES + this.state.employee_code, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.employees ? this.editEmployees : this.createEmployees}>
        <FormGroup>
          <Label for="employee_code">Код сотрудника:</Label>
          <Input
            type="number"
            name="employee_code"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.employee_code)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">ФИО:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <MDBBtn rounded color='success'>Применить</MDBBtn>
      </Form>
    );
  }
}

export default NewEmployeesForm;