import React, { Component, Fragment } from "react";
import OwnersHeader from "./OwnersHeader";
import OwnersHome from "./OwnersHome";


class OwnersIndex extends Component {
    render() {
        return (
            <Fragment>
                <OwnersHeader />
                <OwnersHome />
            </Fragment>
        );
    }
}

export default OwnersIndex;