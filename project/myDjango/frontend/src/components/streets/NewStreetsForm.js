import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL_STREETS } from "../../constants";
import { MDBBtn } from 'mdb-react-ui-kit';


class NewStreetsForm extends React.Component {

  state = {
    streets: [],
    street_code: 0,
    name: "",
    area_code: ""
  };

  componentDidMount() {
    if (this.props.streets) {
      const { street_code, name, area_code } = this.props.streets;
      this.setState({ street_code, name, area_code });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createStreets = e => {
    e.preventDefault();
    axios.post(API_URL_STREETS, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editStreets = e => {
    e.preventDefault();
    axios.put(API_URL_STREETS + this.state.street_code, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };


  render() {
    

    return (
      <Form onSubmit={this.props.streets ? this.editStreets : this.createStreets}>
        <FormGroup>
          <Label for="street_code">Код улицы:</Label>
          <Input
            type="number"
            name="street_code"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.street_code)}
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
        <FormGroup>
          <Label for="area_code">Код района:</Label>
          <Input
            type="text"
            name="area_code"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.area_code)}
          />
        </FormGroup>
        {/* <FormGroup>
              <Label for="area_code">Код района:</Label>
              <Input
                name="area_code"
                type="select"
                onChange={this.onChange}
                value={this.defaultIfEmpty(this.state.area_code)}
              >
        {!streets || streets.length <= 0 ? (
              <b>Ops, no one here yet</b>
        ) : (
          streets.map(streets => (
            
                <option value={streets.area_code}>{streets.area_code}</option>
              
          ))
        )}</Input>
            </FormGroup> */}


        {/* <tbody>
          {
            this.state.streets.map( c => (
              <option>
                {c.area_code__name}
              </option>
            ))
          }
          </tbody> */}
        <MDBBtn rounded color='success'>Применить</MDBBtn>
      </Form>
    );
  }
}

export default NewStreetsForm;