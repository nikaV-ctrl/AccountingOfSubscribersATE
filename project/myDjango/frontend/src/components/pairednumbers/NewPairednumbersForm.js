import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL_PAIREDNUMBERS } from "../../constants";
import { MDBBtn } from 'mdb-react-ui-kit';


class NewPairednumbersForm extends React.Component {
  state = {
    pk: 0,
    pair_number: "",
    phone_number: "",
  };

  componentDidMount() {
    if (this.props.pairednumbers) {
      const { pk, pair_number, phone_number } = this.props.pairednumbers;
      this.setState({ pk, pair_number, phone_number });
    }
  }

  onChange = e => {
    this.setState({ [e.target.phone_number]: e.target.value });
  };

  createPairednumbers = e => {
    e.preventDefault();
    axios.post(API_URL_PAIREDNUMBERS, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editPairednumbers = e => {
    e.preventDefault();
    axios.put(API_URL_PAIREDNUMBERS + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.pairednumbers ? this.editPairednumbers : this.createPairednumbers}>
        <FormGroup>
          <Label for="pair_number">Номер пары:</Label>
          <Input
            type="text"
            name="pair_number"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.pair_number)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone_number">Телефон:</Label>
          <Input
            type="text"
            name="phone_number"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone_number)}
          />
        </FormGroup>
        <MDBBtn rounded color='success'>Применить</MDBBtn>
      </Form>
    );
  }
}

export default NewPairednumbersForm;