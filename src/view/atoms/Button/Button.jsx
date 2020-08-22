import React, {Component} from 'react';
import PropTypes from 'prop-types'

const Button = ({text, onClick, classButton}) => (
    <button className={classButton} onClick={onClick}>{text}</button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string,
    classButton: PropTypes.string
};

Button.defaultProps = {
    onClick: () => null
};

export default Button