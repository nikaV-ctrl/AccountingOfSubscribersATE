import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";
import axios from "axios";
import { API_URL_PAIREDNUMBERS } from "../../constants";
import { MDBBtn } from 'mdb-react-ui-kit';


class ConfirmRemovalModalPairednumbers extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  deletePairednumbers = pk => {
    axios.delete(API_URL_PAIREDNUMBERS + pk).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };

  render() {
    return (
      <Fragment>
        <MDBBtn rounded className='mx-2' color="danger" onClick={() => this.toggle()}>
          Удалить
        </MDBBtn>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Вы действительно хотите удалить данную запись?
          </ModalHeader>

          <ModalFooter>
            <MDBBtn rounded className='mx-2' color='dark' type="button" onClick={() => this.toggle()}>
              Отмена
            </MDBBtn>
            <MDBBtn rounded
              className='mx-2'
              color='danger'
              type="button"
              onClick={() => this.deletePairednumbers(this.props.pk)}
            >
              Да
            </MDBBtn>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ConfirmRemovalModalPairednumbers;