import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL_PAYMENT } from "../../constants";
import { MDBBtn } from 'mdb-react-ui-kit';


class NewPaymentForm extends React.Component {

  state = {
    payment: [],
    pk: 0,
    owner_IIN: "",
    payment_amount: "",
    date: "",
    phone_number: ""
  };

  componentDidMount() {
    if (this.props.payment) {
      const { pk, owner_IIN, payment_amount, date, phone_number } = this.props.payment;
      this.setState({ pk, owner_IIN, payment_amount, date, phone_number });
    }
  }

  onChange = e => {
    this.setState({ [e.target.payment_amount]: e.target.value });
  };

  createPayment = e => {
    e.preventDefault();
    axios.post(API_URL_PAYMENT, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editPayment = e => {
    e.preventDefault();
    axios.put(API_URL_PAYMENT + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };


  render() {
    

    return (
      <Form onSubmit={this.props.payment ? this.editPayment : this.createPayment}>
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
          <Label for="payment_amount">Сумма оплаты:</Label>
          <Input
            type="text"
            name="payment_amount"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.payment_amount)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="date">Дата:</Label>
          <Input
            type="date"
            name="date"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.date)}
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
        <MDBBtn rounded color='success'>Применить</MDBBtn>
      </Form>
    );
  }
}

export default NewPaymentForm;