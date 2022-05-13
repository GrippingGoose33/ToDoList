import React, { Component } from 'react';
import NumbList from './NumbList';

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

        this.setState({
            numero: value,

            resultado: [this.state.numero]
        })

    }


    render() {
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