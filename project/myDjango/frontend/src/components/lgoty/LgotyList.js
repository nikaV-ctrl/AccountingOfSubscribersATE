import React, { Component } from "react";
import { Table } from "reactstrap";
import NewLgotyModal from "./NewLgotyModal";
import ConfirmRemovalModalLgoty from "./ConfirmRemovalModalLgoty";


class LgotyList extends Component {
  render() {
    const lgoty = this.props.lgoty;
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>Код льготы</th>
            <th>Название</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!lgoty || lgoty.length <= 0 ? (
            <tr>
              <td colSpan="2" align="center">
                <b>Нет записей!</b>
              </td>
            </tr>
          ) : (
            lgoty.map(lgoty => (
              <tr key={lgoty.code_lgoty}>
                <td>{lgoty.code_lgoty}</td>
                <td>{lgoty.name_lgoty}</td>
                <td align="center">
                  <NewLgotyModal
                    create={false}
                    lgoty={lgoty}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModalLgoty
                    pk={lgoty.code_lgoty}
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

export default LgotyList;