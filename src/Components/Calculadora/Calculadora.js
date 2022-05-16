import React, { Component } from 'react';


class Calculadora extends Component {

    constructor(){
        super();

        this.state = {
            numb1: '',
            numb2: '',
            calculo: '+',
            result: 0,
        };
    }

    handleOnChange1 = e => {
        const{target:{value1}} = e;
        this.setState({
            numb1: Number(value1),
        })

    }

    handleOnChange2 = e => {
        const{target:{value2}} = e;
        this.setState({
            numb2: Number(value2),
        })

    }

    calculoTotal = () => {
        this.setState({
            resultado: this.state.numb1 + this.state.numb2
        })        

    }

    render() {

        return (
            <div>
                <form className = "Valores">
                    <input
                        type="number"
                        value1={this.state.numb1}
                        onChange={this.handleOnChange1}
                    />
                    
                    <select>
                        <option valor="+">+</option>
                        <option valor="-">-</option>
                        <option valor="*">*</option>
                    </select>
                    
                    <input
                        type="number"
                        value2={this.state.numb2}
                        onChange={this.handleOnChange2}
                    />
                </form>

                <button
                    valor = {this.state.calculo}
                    onClick = {this.calculoTotal}
                >
                    Calcular
                </button>

                <div>
                    El resultado es {this.state.resultado}
                </div>

            </div>
        );
    }
}

export default Calculadora;