import React, {Component} from 'react';
import PropTypes from 'prop-types'

const Button = ({text, onClick}) => {
    <button onClick={onClick}>{text}</button>
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string
};

Button.defaultProps = {
    onClick: () => null
};

export default Button