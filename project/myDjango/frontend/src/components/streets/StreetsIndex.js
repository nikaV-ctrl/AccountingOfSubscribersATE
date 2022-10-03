import React, { Component, Fragment } from "react";
import StreetsHeader from "./StreetsHeader";
import StreetsHome from "./StreetsHome";


class App extends Component {
    render() {
        return (
            <Fragment>
                <StreetsHeader />
                <StreetsHome />
            </Fragment>
        );
    }
}

export default App;