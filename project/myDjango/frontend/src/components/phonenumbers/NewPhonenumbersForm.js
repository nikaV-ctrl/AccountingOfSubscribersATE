import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL_PHONENUMBERS } from "../../constants";
import { MDBBtn } from 'mdb-react-ui-kit';


class NewPhonenumbersForm extends React.Component {
  state = {
    phone_number: 0,
    owner_IIN: "",
    street_code: "",
    house_number: "",
    apartment_number: "",
    close_number_sign: true,
    pairing_number_sign: true
  };

  componentDidMount() {
    if (this.props.phonenumbers) {
      const { phone_number, owner_IIN, street_code, house_number, apartment_number, close_number_sign, pairing_number_sign } = this.props.phonenumbers;
      this.setState({ phone_number, owner_IIN, street_code, house_number, apartment_number, close_number_sign, pairing_number_sign });
    }
  }

  onChange = e => {
    this.setState({ [e.target.owner_IIN]: e.target.value });
  };

  createPhonenumbers = e => {
    e.preventDefault();
    axios.post(API_URL_PHONENUMBERS, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editPhonenumbers = e => {
    e.preventDefault();
    axios.put(API_URL_PHONENUMBERS + this.state.phone_number, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.phonenumbers ? this.editPhonenumbers : this.createPhonenumbers}>
        <FormGroup>
          <Label for="phone_number">Номер телефона:</Label>
          <Input
            type="number"
            name="phone_number"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone_number)}
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
        <FormGroup>
          <Label for="street_code">Код улицы:</Label>
          <Input
            type="text"
            name="street_code"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.street_code)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="house_number">Номер дома:</Label>
          <Input
            type="text"
            name="house_number"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.house_number)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment_number">Номер квартиры:</Label>
          <Input
            type="text"
            name="apartment_number"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.apartment_number)}
          />
        </FormGroup>
        <FormGroup check>
          <Label for="close_number_sign">Признак закрытости номера:</Label>
          <Input
            checked={this.state.close_number_sign}
            type="checkbox"
            name="close_number_sign"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.close_number_sign)}
          />
        </FormGroup>
        <FormGroup check>
          <Label for="pairing_number_sign">Признак спаренности номера:</Label>
          <Input
          checked={this.state.pairing_number_sign}
            type="checkbox"
            name="pairing_number_sign"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.pairing_number_sign)}
          />
        </FormGroup>
        <MDBBtn rounded color='success'>Применить</MDBBtn>
      </Form>
    );
  }
}

export default NewPhonenumbersForm;