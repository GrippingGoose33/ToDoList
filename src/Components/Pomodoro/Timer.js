import React, { Component } from 'react';
import "./Timer.css";

class Timer extends Component {
    constructor(){
        super();

        //initial states
        this.state = {
            alert: {
                type: '',
                message: '',
            },

            time: 0
        };

        this.times = {
            defaultTime: 1500, // 25min
            shortBreak: 300, // 5min
            longBreak: 900, // 15min
        }
    }

    componentDidMount(){
        //Establece tiempo por defecto cuando el componente sea montado
        this.setDefaultTime()
    }

    setDefaultTime() {
        this.setState({
            time: this.times.defaultTime
        })
    }

    setTimeForWork = () => {
        this.setState({
            alert:{
                type: 'work',
                message: 'Working!!!!!'
            }
        })
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert:{
                type: 'shortBreak',
                message: 'Taking a short break'
            }
        })
    }

    setTimeForlongBreak = () => {
        this.setState({
            alert:{
                type: 'longBreak',
                message: 'Taking a long break'
            }
        })
    }

    render() {
        const {alert: {message, type}, time} = this.state;
        return (
            <div className = "Pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>
                
                <div className = "timer">
                    00:00:00.00
                </div>

                <div className = "types">
                    <button 
                        className = "start"
                        onClick = {this.setTimeForWork}
                    >
                        start to workworkworkworkwork
                    </button>
                    <button 
                        className = "short"
                        onClick = {this.setTimeForShortBreak}
                    >
                        Short Break
                    </button>
                    <button 
                        className = "long"
                        onClick = {this.setTimeForlongBreak}
                    >
                        Long Break
                    </button>
                </div>
            </div>
        );
    }
}

export default Timer;