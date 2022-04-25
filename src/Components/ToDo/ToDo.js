import React, { Component } from 'react';
import {v4 as uuid4} from 'uuid';
import List from './List';
import './ToDo.css'

class ToDo extends Component {

    constructor() {
        super();
        
        this.state = {
            task: '',
            items: [
            {
                id: uuid4(),
                task:'Estudiar',
                complete: false,
            },
        
            {
                id: uuid4(),
                task:'Trabajar',
                complete: false,
            },

            {
                id: uuid4(),
                task:'Dormir',
                complete: false,
            },
        ],
        }

    }

    handleOnChange = e => {
        const{target:{value}} = e;

        this.setState({
            task: value
        })
    }

    handleOnSubmite = e => {
        e.preventDefault();

        if (this.state.task.trim() !== '') {
            this.setState({
                task: '',
                items: [
                    ...this.state.items,
                    {
                        id: uuid4(),
                        task: this.state.task,
                        complete: false
                    }
                ]
            })
        }
    }

    markAsCompleted = id => {
        const {items} = this.state;

        const foundTask = items.find(
            item => item.id === id
        );

        foundTask.complete = !foundTask.complete;

        this.setState({
            items:{
              ...this.state.items, 
            }
        })
    }

    removeTask = id => {
        const {items} = this.state;
        const filteredItems = items.filter(
            item => item.id !== id
        )

        this.setState({
            items: filteredItems,
        })
    }

    unComplete = id => {
        const {items} = this.state;

        const foundTask = items.find(
            item => item.id === id
        );

        foundTask.complete = false;
    }

    render() {

        console.log(this.state.items);
        //console.log(this.state.task);

        return (
            <div className="Todo">
                <h1>Nueva tarea</h1>

                <form onSubmit={this.handleOnSubmite}>
                    <input
                        type = 'text'
                        value = {this.state.task}
                        onChange = {this.handleOnChange}
                    />
                </form>
                
                <List 
                    items = {this.state.items}
                    markAsCompleted = {this.markAsCompleted}
                    removeTask = {this.removeTask}
                    unComplete = {this.unComplete}
                />

            </div>
            
        );
    }
}

export default ToDo;