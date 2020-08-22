import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindAll, debounce} from 'lodash';
import Task from "view/templates/Task/Task";

import style from './Tasks.styl'

class Tasks extends React.Component{
    constructor(props) {
        super(props);

        bindAll(this, [
            'onCheckmark',
            'onRemove'
        ])

    }

    onCheckmark(id){
        let {tasks} = this.props;
        tasks.map(el => el.status = el.id === id ? !el.status : el.status)
        this.props.valueTasks(tasks);
    }

    onRemove(id){
        const {tasks} = this.props;
        this.props.valueTasks(tasks.filter(el => el.id !== id));
    }

    render(){
        const {tasks} = this.props;
        return (
            <div className={'tasks__list'}>
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        message={task.message}
                        onCheckmarkClick={() => this.onCheckmark(task.id)}
                        onRemoveClick={() => this.onRemove(task.id)}
                        status={task.status}
                    />
                ))}
            </div>
        )
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array,
    valueTasks: PropTypes.func
}

Tasks.defaultProps = {
    valueTasks: () => null
}

export default Tasks;