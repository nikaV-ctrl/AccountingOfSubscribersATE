import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPairednumbersModal from "./NewPairednumbersModal";
import ConfirmRemovalModalPairednumbers from "./ConfirmRemovalModalPairednumbers";


class PairednumbersList extends Component {
  render() {
    const pairednumbers = this.props.pairednumbers;
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>Номер пары</th>
            <th>Телефон</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!pairednumbers || pairednumbers.length <= 0 ? (
            <tr>
              <td colSpan="2" align="center">
                <b>Нет записей!</b>
              </td>
            </tr>
          ) : (
            pairednumbers.map(pairednumbers => (
              <tr key={pairednumbers.pk}>
                <td>{pairednumbers.pair_number}</td>
                <td>{pairednumbers.phone_number}</td>
                <td align="center">
                  <NewPairednumbersModal
                    create={false}
                    pairednumbers={pairednumbers}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModalPairednumbers
                    pk={pairednumbers.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default PairednumbersList;