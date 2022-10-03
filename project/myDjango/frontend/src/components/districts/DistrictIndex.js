import React, { Component, Fragment } from "react";
import DistrictHeader from "./DistrictHeader";
import DistrictHome from "./DistrictHome";


class DistrictIndex extends Component {
    render() {
        return (
            <Fragment>
                <DistrictHeader />
                <DistrictHome />
            </Fragment>
        );
    }
}

export default DistrictIndex;