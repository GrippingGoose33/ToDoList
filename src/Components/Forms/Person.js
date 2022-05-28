import React, { Component } from 'react';

class Person extends Component {
    constructor(props){
        super(props);

        this.state={
            nombre:'',
            apellido:'',
            email:'',
            telefono:'',

            errors: {
                nombre: false,
                apellido: false
            }

        }
    }


    handleOnChange = e => {
        const{target:{value, name}} = e;

        this.setState({
            [name]: value
        })


        console.log(value);
    };

    handleOnSubmite = e => {
        e.preventDefault();
        const {nombre, apellido, email, telefono} = this.state;

        this.setState({
            errors: {
                nombre: nombre.trim() === '',
                apellido: apellido.trim() === ''
            }
        })
        
        if (nombre && apellido){
            const data = {
                nombre,
                apellido,
                email,
                telefono
            };
            console.log("Data:", data);
        }
    }


    render() {
        return (
            <div className ="Person">
                <form onSubmit={this.handleOnSubmite}>
                    <div>
                        <label>
                            <h1>Nombre</h1>

                            <input
                                type="text"
                                value = {this.state.nombre}
                                name = "nombre"
                                onChange = {this.handleOnChange}
                                className={
                                    this.state.errors.nombre ? 'error' : ''
                                }
                            />
                        </label>
                        {
                            this.state.errors.nombre
                            &&
                            <div className= "errorMessage">Required</div>
                        }
                    </div>

                    <div>
                        <label>
                        <h1>Apellido</h1>

                            <input
                                type="text"
                                value = {this.state.apellido}
                                name = "apellido"
                                onChange = {this.handleOnChange}
                                className={this.state.errors.apellido ? 'error' : ''}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <h1>Email</h1>

                            <input
                                type="email"
                                value = {this.state.email}
                                name = "email"
                                onChange = {this.handleOnChange}
                            />
                        </label>
                        {
                            this.state.errors.nombre
                            &&
                            <div className= "errorMessage">Required</div>
                        }
                    </div>
                    <div>
                        <label>
                            <h1>Telefono</h1>

                            <input
                                type="tel"
                                value = {this.state.telefono}
                                name = "telefono"
                                onChange = {this.handleOnChange}
                            />
                        </label>
                    </div>
                    <input type="submit" name="Save info"/>

                </form>
            </div>
        );
    }
}

export default Person;