import * as React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindAll} from 'lodash';

import Input from "view/atoms/Input/Input"
import Button from "view/atoms/Button/Button";

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

    submitForm(){
        console.log(1);
    }

    render() {
        const {valueInput} = this.state;
        return (
            <div className="todo_form">
                <Input label={'text'} onChange={this.valueForm} value={valueInput}/>
                <Button text={'Add'} onClick={this.submitForm}/>
            </div>
        );
    }
}

export default Form