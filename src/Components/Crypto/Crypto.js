import React, { Component } from 'react';
import "./Crypto.css";

class Crypto extends Component {

    constructor(){
        super();
        this.state = {
            dolar: 0,
            coin: 0,
        };
    }

    handleOnChange = e => {
        const{target:{value}} = e;

        this.setState({
            dolar: value
        })
    }

    changeToCrypto(dinero){

        let coin = Math.floor(dinero/10)

        if(dinero%10 !==0){
            coin = 0
        }

        return `Las monedas obtenibles son ¡${coin}!`;
    }
    
    render() {

        const {dolar} = this.state;
        return (
            <div className = "Changer">

                <div className = "question">
                    ¿Cuantos Dolares se van a invertir?
                </div>

                <div className = "CValue">
                    Valor actual de la Crypto moneda es $10
                </div>

                <form>
                    <input 
                        className = "dolars"
                        type='number'
                        value = {this.state.dolar}
                        onChange={this.handleOnChange}
                    />
                </form>
                
                <div className = "coins">
                    {this.changeToCrypto(dolar)}
                </div>
            </div>
        );
    }
}

export default Crypto;