import React, { Component } from "react";
import { Alert } from 'reactstrap';


class EmployeesHeader extends Component {
  render() {
    return (
      <div className="text-center">
        <Alert color="dark">
          <h3>Сотрудники</h3>
        </Alert>
      </div>
    );
  }
}

export default EmployeesHeader;