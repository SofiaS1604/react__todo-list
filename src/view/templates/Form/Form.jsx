import * as React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindAll, debounce} from 'lodash';

import Input from "view/atoms/Input/Input"
import Button from "view/atoms/Button/Button";

import styles from './Form.styl'

class Form extends React.Component {
    constructor(props) {
        super(props);

        bindAll(this, [
            'valueForm',
            'submitForm'
        ]);

        this.state = {
            valueInput: '',
        }
    }

    valueForm(valueInput){
        this.setState({valueInput});
    }

    submitForm(){
        let {valueInput} = this.state;

        if(!valueInput || !valueInput.length)
             return false;

        this.props.submitForm(valueInput);
    }

    render() {
        const {valueInput} = this.state;

        return (
            <div className="form">
                <Input onChange={this.valueForm} value={valueInput}/>
                <Button classButton={'form__button'} text={'Add'}  onClick={this.submitForm}/>
            </div>
        );
    }
}

Form.propTypes = {
    submitForm: PropTypes.func
};

Form.defaultProps = {
    submitForm: () => null
};

export default Form