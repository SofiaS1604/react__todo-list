import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Input.styl';
import {debounce} from 'lodash'

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
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

        return (
            <input placeholder={'Inter text task'} onChange={this.onChange} type="text" value={value} className="form__input"/>
        );
    }
}

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    onEnterPress: PropTypes.func
};

Input.defaultProps = {
    onChange: () => null,
    value: '',
};

export default Input