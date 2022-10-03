import React, { Component, Fragment } from "react";
import PhonenumbersHeader from "./PhonenumbersHeader";
import PhonenumbersHome from "./PhonenumbersHome";


class PhonenumbersIndex extends Component {
    render() {
        return (
            <Fragment>
                <PhonenumbersHeader />
                <PhonenumbersHome />
            </Fragment>
        );
    }
}

export default PhonenumbersIndex;