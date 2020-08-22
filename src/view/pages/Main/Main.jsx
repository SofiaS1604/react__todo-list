import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Main.styl';
import {bindAll, debounce} from 'lodash';
import Form from "view/templates/Form/Form";
import Tasks from "view/widgets/Tasks/Tasks";

class Main extends React.Component{
    constructor(props) {
        super(props);

        bindAll(this, [
            'submitForm',
            'valueTasks'
        ]);

        this.state = {
            valueInput: '',
            tasks: []
        }
    }

    submitForm(valueInput){
        const {tasks} = this.state;
        let id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        tasks.push({id: id, message: valueInput, status: false});
        this.setState({tasks: tasks});
    }

    valueTasks(tasks){
        this.setState({tasks});
    }

    render(){
        const {tasks} = this.state;
        return(
            <main className={'main'}>
                <Form submitForm={this.submitForm}/>
                <Tasks valueTasks={this.valueTasks} tasks={tasks}/>
            </main>
        )
    }
}

export default Main;