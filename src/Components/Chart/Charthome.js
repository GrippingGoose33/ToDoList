import React, { Component } from 'react';
import Chart from './Chart';

class ChartHome extends Component {

    constructor(props){
        super(props);

        this.state = {
            chartType: 'line'
        }

        this.columns = [
            ['BTS', 3000, 6000, 10000, 15000, 13000, 11000],
            ['ETH', 2000, 3000, 5000, 4000, 3000, 940],                        
            ['XRP', 100, 200, 300, 500, 400, 300],
        ]   
    }

    setBarChart = () => {
        this.setState({
            chartType: 'bar'
        })
    }

    setLineChart = () => {
        this.setState({
            chartType: 'line'
        })
    }

    render() {
        return (
            <div>
                <Chart
                    columns= {this.columns}
                    chartType= {this.state.chartType}
                />
                <p>
                    Chart Type
                    <button onClick= {this.setBarChart}>Bar</button>
                    <button onClick= {this.setLineChart}>Line</button>
                </p>
            </div>
        );
    }
}

export default ChartHome;