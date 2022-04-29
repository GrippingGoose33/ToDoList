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

        this.setTime(this.times.defaultTime);
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert:{
                type: 'shortBreak',
                message: 'Taking a short break'
            }
        })

        this.setTime(this.times.shortBreak);
    }

    setTimeForlongBreak = () => {
        this.setState({
            alert:{
                type: 'longBreak',
                message: 'Taking a long break'
            }
        })

        this.setTime(this.times.longBreak);
    }

    setTime = (newTime) => {
        this.restartInterval();
        this.setState({
            time: newTime,
        })
    }

    restartInterval = () => {
        clearInterval();

        this.interval = setInterval(this.countDown, 1000)
    }

    countDown =() => {
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: "Beep",
                    message: "Beeeeeeeeeeeeeep",
                }
            })
        }
        else {
            this.setState({
                time: this.state.time - 1, 
            })
        }
    }

    displayTimer(seconds) {

        let min = Math.floor((seconds /60)%60)
        let sec = Math.floor(seconds%60)
        let min0 = ""
        let sec0 = "0"
        if(min < 10){
            min0 = "0"
        }
        else{
            min0 = ""
        }
        if(sec < 10 ){
            sec0 = "0"
        }
        else{
            sec0 = ""
        }

        return min0 + min + ":" + sec0 + sec
    }

    render() {
        const {alert: {message, type}, time} = this.state;
        return (
            <div className = "Pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>
                
                <div className = "timer">
                    {this.displayTimer(time)}
                </div>

                <div className = "types">
                    <button 
                        className = "start"
                        onClick = {this.setTimeForWork}
                    >
                        start to Work
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