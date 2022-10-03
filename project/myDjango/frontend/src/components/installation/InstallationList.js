import React, { Component } from "react";
import { Table } from "reactstrap";
import NewInstallationModal from "./NewInstallationModal";
import ConfirmRemovalModalInstallation from "./ConfirmRemovalModalInstallation";


class InstallationList extends Component {
  render() {
    const installation = this.props.installation;
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>Дата установки</th>
            <th>Номер телефона</th>
            <th>Код сотрудника</th>
            <th>ИИН владельца</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!installation || installation.length <= 0 ? (
            <tr>
              <td colSpan="2" align="center">
                <b>Нет записей!</b>
              </td>
            </tr>
          ) : (
            installation.map(installation => (
              <tr key={installation.pk}>
                <td>{installation.data_installations}</td>
                <td>{installation.phone_number}</td>
                <td>{installation.employee_code}</td>
                <td>{installation.owner_IIN}</td>
                <td align="center">
                  <NewInstallationModal
                    create={false}
                    installation={installation}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModalInstallation
                    pk={installation.pk}
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

export default InstallationList;