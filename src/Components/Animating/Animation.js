import React, { Component } from 'react';
import './Animation.css';

class Animation extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,    
        }

    }

    toggleCollapse = () => {
        this.setState({
            show: !this.state.show
        })
    }
    
    /*componentDidUpdate(newState){
        if(!newState.show) {
            document.getElementById('fade').style = 'opacity: 1'
        }else(
            document.getElementById('fade').style = 'opacity: 0'
        )
    }*/

    render() {
        return (
            <div className = "Animation">
                <button onClick = {this.toggleCollapse}>
                    {this.state.show? 'Collapse' : 'Expand'}
                </button>
                <div
                    id='fade'
                    className={this.state.show? 'Cube' : 'Cubo'}
                >
                </div>
            </div>
        );
    }
}

export default Animation;