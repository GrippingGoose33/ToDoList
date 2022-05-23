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

            time: 0,
            plaing: false,
            pause: false,
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
            },
            plaing: true
        })

        this.setTime(this.times.defaultTime);
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert:{
                type: 'shortBreak',
                message: 'Taking a short break'
            },
            plaing: true
        })

        this.setTime(this.times.shortBreak);
    }

    setTimeForlongBreak = () => {
        this.setState({
            alert:{
                type: 'longBreak',
                message: 'Taking a long break'
            },
            plaing: true
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
        clearInterval(this.interval);

        this.interval = setInterval(this.countDown, 1000)
    }

    countDown =() => {
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: "Beep",
                    message: "Beeeeeeeeeeeeeep",
                }
            });
        }
        else {
            this.setState({
                time: this.state.time - 1, 
            });
        }
    }

    pauseTime = () => {   

        clearInterval(this.interval)
        this.setState({
            pause: true
        })

    }

    contTime = () => {
        this.interval = setInterval(this.countDown, 1000)
        this.setState({
            pause:false
        })
    }

    stopTime = () => {
        this.setState({
            plaing: false,
            time: 0,
            pause: false,
            alert:{
                type: '',
                message: ''
            },
        })
        clearInterval(this.interval);
        this.setDefaultTime();
    }

    displayTimer(seconds) {
        let m = Math.floor(seconds / 60)
        let s = Math.floor(seconds % 60)

        return `${m< 10 ? '0' : ''}${m}:${s<10 ? '0': ''}${s}`;
    }

    render() {
        const {alert: {message, type}, time, plaing, pause} = this.state;
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

                <div className = {plaing ? "cdown" : "canceled"}>
                    <button
                        onClick = {this.pauseTime}
                        className={pause ? "continuar": "pausa"}
                    >
                        <i className={'fa fa-pause'}></i>
                    </button>
                    <button
                        onClick = {this.contTime}
                        className={pause ? "pausa": "continuar"}
                    >
                        <i className={'fa fa-play'}></i>
                    </button>
                    <button
                        onClick = {this.stopTime}
                    >
                        <i className='fa fa-stop'></i>
                    </button>
                </div>

            </div>
        );
    }
}

export default Timer;