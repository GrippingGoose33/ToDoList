import React, { Component } from 'react';
import './Number.css';

class Number extends Component {

    constructor(props){
        super(props);

        this.state = {
            numero: '',
            resultado: [],
        }
    }

    handleOnChange = e => {
        const{target:{value}} = e;

        const numbers = Array.from(value);
        const results = numbers.reduce((a, b) => Number(a) + Number(b), 0);

        this.setState({
            numero: value,

            resultado: [...this.state.resultado, results]
        })

    }


    render() {
        const {resultado} = this.state;

        return (
            <div>
                <h1>Suma de numeros continuos</h1>
                <form>
                    <input
                        type="number"
                        value={this.state.numero}
                        onChange= {this.handleOnChange}
                    />
                </form>
                
                {/*<NumbList   //resultado= {this.state.resultado}  /> */}

            </div>
        );
    }
}

export default Number;