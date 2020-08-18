import * as React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindAll} from 'lodash';

import Input from "./../../atoms/Input/Input"

class Form extends React.Component {
    constructor(props) {
        super(props);

        bindAll(this, [
            'valueForm'
        ]);

        this.state = {
            valueInput: '',
        }
    }

    valueForm(valueInput){
        this.setState({valueInput});
    }

    render() {
        const {valueInput} = this.state;
        return (
            <div className="todo_list">
                <Input label='text' onChange={this.valueForm} value={valueInput}/>
            </div>
        );
    }
}

export default Form