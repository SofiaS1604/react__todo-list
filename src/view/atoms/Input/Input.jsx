import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Input.styl';
import {debounce} from 'lodash'

class Input extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            value: props.value,
            label: props.label
        };

        this.onChangeDebounced = debounce(this.props.onChange);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({value: e.target.value});
        this.onChangeDebounced(e.target.value);
    }

    render() {
        const {value} = this.state;
        const {label} = this.state;

        return (
            <div className="form__group">
                <input onChange={this.onChange} type="text" value={value} className="form__input"/>
                <label className="form__label">{label}</label>
            </div>
        );
    }
}

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string
};

Input.defaultProps = {
    onChange: () => null,
    value: '',
    label: '',
};

export default Input