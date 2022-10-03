import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL_LGOTY } from "../../constants";
import { MDBBtn } from 'mdb-react-ui-kit';


class NewLgotyForm extends React.Component {
  state = {
    code_lgoty: 0,
    name_lgoty: "",
  };

  componentDidMount() {
    if (this.props.lgoty) {
      const { code_lgoty, name_lgoty } = this.props.lgoty;
      this.setState({ code_lgoty, name_lgoty });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name_lgoty]: e.target.value });
  };

  createLgoty = e => {
    e.preventDefault();
    axios.post(API_URL_LGOTY, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editLgoty = e => {
    e.preventDefault();
    axios.put(API_URL_LGOTY + this.state.code_lgoty, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.lgoty ? this.editLgoty : this.createLgoty}>
        <FormGroup>
          <Label for="code_lgoty">Код льготы:</Label>
          <Input
            type="number"
            name="code_lgoty"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.code_lgoty)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name_lgoty">Название:</Label>
          <Input
            type="text"
            name="name_lgoty"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name_lgoty)}
          />
        </FormGroup>
        <MDBBtn rounded color='success'>Применить</MDBBtn>
      </Form>
    );
  }
}

export default NewLgotyForm;