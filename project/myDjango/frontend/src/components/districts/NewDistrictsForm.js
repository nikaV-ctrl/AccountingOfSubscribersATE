import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL_DISTRICT } from "../../constants";
import { MDBBtn } from 'mdb-react-ui-kit';


class NewDistrictsForm extends React.Component {
  state = {
    area_code: 0,
    name: "",
  };

  componentDidMount() {
    if (this.props.districts) {
      const { area_code, name } = this.props.districts;
      this.setState({ area_code, name });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createDistricts = e => {
    e.preventDefault();
    axios.post(API_URL_DISTRICT, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editDistricts = e => {
    e.preventDefault();
    axios.put(API_URL_DISTRICT + this.state.area_code, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.districts ? this.editDistricts : this.createDistricts}>
        <FormGroup>
          <Label for="area_code">Код района:</Label>
          <Input
            type="number"
            name="area_code"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.area_code)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Название:</Label>
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

export default NewDistrictsForm;