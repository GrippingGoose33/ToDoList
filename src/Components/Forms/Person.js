import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Popup.css';
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
            },

            open: false,

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
            },

            open: true,
        })
        
        if (nombre.trim() && apellido.trim()){

            Popup.create({
                title: 'Person Information', 
                content: (
                    <span>
                     <div>
                          <p><strong>Nombre: </strong>{nombre} {apellido}</p>
                         <p><strong>Email: </strong>{email}</p>
                         {telefono && <p><strong>Telefono: </strong>{telefono}</p>}
                     </div>
                    </span>
                ),

                buttons: {
                    right: [{
                        text: 'close',  
                        action: popup => popup.close()
                    }]
                }
            })
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
                        {
                            this.state.errors.nombre
                            &&
                            <div className= "errorMessage">Required</div>
                        }
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
                <Popup open = {this.state.open}>
                {close => (
             <div className="modal">
               <button className="close" onClick={close}>
                 &times;
              </button>
              <div className="header"> Datos </div>
               <div className="content">
               <span>
                     <div>
                          <p><strong>Nombre: </strong>{this.state.nombre} {this.state.apellido}</p>
                         <p><strong>Email: </strong>{this.state.email}</p>
                         {this.state.telefono && <p><strong>Telefono: </strong>{this.state.telefono}</p>}
                     </div>
                    </span>
              </div>
               <div className="actions">
                <button
                  className="button"
                   onClick={() => {
                     console.log('modal closed ');
                     close();
                     this.setState({
                         open: false
                     })
                    }}
                 >
                   Cerrar
                 </button>
               </div>
             </div>
          )}
                </Popup>
            </div>
        );
    }
}

export default Person;