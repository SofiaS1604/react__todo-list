import * as React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindAll} from 'lodash';

import Form from "./templates/Form/Form"

class App extends React.Component {
    render() {
        return (
            <div className="todo_list">
                <Form/>
            </div>
        );
    }
}

export default App