import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewEmployeesForm from "./NewEmployeesForm";
import { MDBBtn } from 'mdb-react-ui-kit';


class NewEmployeesModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Изменить данные";
    var button = <MDBBtn rounded className='text-dark' color='light' onClick={this.toggle}>Изменить</MDBBtn>;
    if (create) {
      title = "Создать нового сотрудника";

      button = (
        <MDBBtn rounded
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Создать
        </MDBBtn>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewEmployeesForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              employees={this.props.employees}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewEmployeesModal;