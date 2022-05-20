import React, { Component } from 'react';


class Calculadora extends Component {

    constructor(){
        super();

        this.state = {
            numb1: 0,
            numb2: 0,
            calculo: 'Suma',
            result: 0,
        };
    }

    handleOnChange1 = e => {
        const{target:{value}} = e;
        this.setState({
            numb1: Number(value),
        })

    }

    handleOnChange2 = e => {
        const{target:{value}} = e;
        this.setState({
            numb2: Number(value),
        })

    }

    seleChange = e => {
        const{target:{value}} = e;

        this.setState({
            calculo: value
        })
    }

    calculoTotal = () => {
        
        if(this.state.calculo === "Suma"){
            this.setState({
                resultado: this.state.numb1 + this.state.numb2
            })
        }

        if(this.state.calculo === "Resta"){
            this.setState({
                resultado: this.state.numb1 - this.state.numb2
            })
        }

        if(this.state.calculo === "Multi"){
            this.setState({
                resultado: this.state.numb1 * this.state.numb2
            })
        }

        if(this.state.calculo === "Divis"){

            let resultados;
            resultados = this.state.numb1 / this.state.numb2;

            this.setState({
                resultado: resultados.toFixed(2)
            })
        }
    }

    render() {

        return (
            <div>
                <form className = "Valores">
                    <input
                        type="number"
                        value={this.state.numb1}
                        onChange={this.handleOnChange1}
                    />
                    
                    <select onChange= {this.seleChange}>
                        <option value="Suma">+</option>
                        <option value="Resta">-</option>
                        <option value="Multi">*</option>
                        <option value="Divis">/</option>
                    </select>
                    
                    <input
                        type="number"
                        value={this.state.numb2}
                        onChange={this.handleOnChange2}
                    />
                </form>

                <button
                    value = {this.state.calculo}
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