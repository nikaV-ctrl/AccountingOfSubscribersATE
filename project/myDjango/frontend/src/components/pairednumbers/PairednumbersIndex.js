import React, { Component, Fragment } from "react";
import PairednumbersHeader from "./PairednumbersHeader";
import PairednumbersHome from "./PairednumbersHome";


class PairednumbersIndex extends Component {
    render() {
        return (
            <Fragment>
                <PairednumbersHeader />
                <PairednumbersHome />
            </Fragment>
        );
    }
}

export default PairednumbersIndex;