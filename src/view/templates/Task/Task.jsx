import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Task.styl';
import {debounce} from 'lodash'
import Button from "view/atoms/Button/Button";

const Task = ({message, onRemoveClick, onCheckmarkClick, status}) => (
    <div className="task">
        <div className={status ? "task__text task__text--active" : "task__text"}>
            {message}
        </div>
        <div className="task__buttons">
            <Button onClick={onCheckmarkClick} classButton={status ? "task__completed task__completed--active" : "task__completed"} text={'✔'}/>
            <Button onClick={onRemoveClick} classButton="task__remove" text={'✘'}/>
        </div>
    </div>
);

Task.propTypes = {
    message: PropTypes.string.isRequired,
    onRemoveClick: PropTypes.func,
    onCheckmarkClick: PropTypes.func,
    status: PropTypes.bool
};

Task.defaultProps = {
    status: false,
    onRemoveClick: () => null,
    onCheckmarkClick: () => null
}

export default Task