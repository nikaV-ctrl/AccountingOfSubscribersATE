import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL_INSTALLATION } from "../../constants";
import { MDBBtn } from 'mdb-react-ui-kit';


class NewInstallationForm extends React.Component {

  state = {
    installation: [],
    pk: 0,
    data_installations: "",
    phone_number: "",
    employee_code: "",
    owner_IIN: ""
  };

  componentDidMount() {
    if (this.props.installation) {
      const { pk, data_installations, phone_number, employee_code, owner_IIN } = this.props.installation;
      this.setState({ pk, data_installations, phone_number, employee_code, owner_IIN });
    }
  }

  onChange = e => {
    this.setState({ [e.target.owner_IIN]: e.target.value });
  };

  createInstallation = e => {
    e.preventDefault();
    axios.post(API_URL_INSTALLATION, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editInstallation = e => {
    e.preventDefault();
    axios.put(API_URL_INSTALLATION + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };


  render() {
    

    return (
      <Form onSubmit={this.props.installation ? this.editInstallation : this.createInstallation}>
        <FormGroup>
          <Label for="data_installations">Дата установки:</Label>
          <Input
            type="datetime"
            name="data_installations"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.data_installations)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone_number">Номер телефона:</Label>
          <Input
            type="text"
            name="phone_number"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone_number)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="employee_code">Код сотрудника:</Label>
          <Input
            type="text"
            name="employee_code"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.employee_code)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="owner_IIN">ИИН владельца:</Label>
          <Input
            type="text"
            name="owner_IIN"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.owner_IIN)}
          />
        </FormGroup>
        <Button>Применить</Button>
      </Form>
    );
  }
}

export default NewInstallationForm;