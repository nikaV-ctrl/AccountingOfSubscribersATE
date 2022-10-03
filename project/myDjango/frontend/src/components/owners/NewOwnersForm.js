import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL_OWNERS } from "../../constants";
import { MDBBtn } from 'mdb-react-ui-kit';


class NewOwnersForm extends React.Component {
  state = {
    IIN: 0,
    FIO: "",
    birthdate: "",
    gender: "",
    availability_lgoty_signs: false,
    code_type_lgoty: ""
  };

  componentDidMount() {
    if (this.props.owners) {
      const { IIN, FIO, birthdate, gender, availability_lgoty_signs, code_type_lgoty } = this.props.owners;
      this.setState({ IIN, FIO, birthdate, gender, availability_lgoty_signs, code_type_lgoty });
    }
  }

  onChange = e => {
    this.setState({ [e.target.FIO]: e.target.value });
  };

  createOwners = e => {
    e.preventDefault();
    axios.post(API_URL_OWNERS, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editOwners = e => {
    e.preventDefault();
    axios.put(API_URL_OWNERS + this.state.IIN, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.owners ? this.editOwners : this.createOwners}>
        <FormGroup>
          <Label for="IIN">ИИН:</Label>
          <Input
            type="number"
            name="IIN"
            onChangne={this.onChange}
            value={this.defaultIfEmpty(this.state.IIN)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="FIO">ФИО:</Label>
          <Input
            type="text"
            name="FIO"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.FIO)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="birthdate">Дата рождения:</Label>
          <Input
            type="date"
            name="birthdate"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.birthdate)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="gender">Пол:</Label>
          <Input
            type="text"
            name="gender"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.gender)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="availability_lgoty_signs">Признак наличия льготы:</Label>
          <Input
            checked={this.state.availability_lgoty_signs}
            type="checkbox"
            name="availability_lgoty_signs"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.availability_lgoty_signs)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="code_type_lgoty">Код льготы:</Label>
          <Input
            type="text"
            name="code_type_lgoty"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.code_type_lgoty)}
          />
        </FormGroup>
        <MDBBtn rounded color='success'>Применить</MDBBtn>
      </Form>
    );
  }
}

export default NewOwnersForm;