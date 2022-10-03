import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewOwnersForm from "./NewOwnersForm";
import { MDBBtn } from 'mdb-react-ui-kit';


class NewOwnersModal extends Component {
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
      title = "Создать новый район";

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
            <NewOwnersForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              owners={this.props.owners}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewOwnersModal;