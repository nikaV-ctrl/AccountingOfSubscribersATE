import React, { Component, Fragment } from "react";
import InstallationHeader from "./InstallationHeader";
import InstallationHome from "./InstallationHome";


class InstallationIndex extends Component {
    render() {
        return (
            <Fragment>
                <InstallationHeader />
                <InstallationHome />
            </Fragment>
        );
    }
}

export default InstallationIndex;