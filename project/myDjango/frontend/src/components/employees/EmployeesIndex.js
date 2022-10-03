import React, { Component, Fragment } from "react";
import EmployeesHeader from "./EmployeesHeader";
import EmployeesHome from "./EmployeesHome";


class EmployeesIndex extends Component {
    render() {
        return (
            <Fragment>
                <EmployeesHeader />
                <EmployeesHome />
            </Fragment>
        );
    }
}

export default EmployeesIndex;