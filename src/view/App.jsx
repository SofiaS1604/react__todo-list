import * as React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindAll} from 'lodash';

import Main from "view/pages/Main/Main";

class App extends React.Component {
    render() {
        return (
            <Main/>
        );
    }
}

export default App