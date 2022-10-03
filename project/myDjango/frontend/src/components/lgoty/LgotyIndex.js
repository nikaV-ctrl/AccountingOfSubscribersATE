import React, { Component, Fragment } from "react";
import LgotyHeader from "./LgotyHeader";
import LgotyHome from "./LgotyHome";


class LgotyIndex extends Component {
    render() {
        return (
            <Fragment>
                <LgotyHeader />
                <LgotyHome />
            </Fragment>
        );
    }
}

export default LgotyIndex;