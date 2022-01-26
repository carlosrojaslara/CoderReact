import React from 'react';

const Form = (props) => {


  return <div>
            <h2>DATOS DE USUARIO</h2>

            <form className='formContainer' onSubmit={props.guardarCompra}>
                <label htmlFor="nombre">Ingrese su nombre</label>
                <input
                    type='text'
                    id="nombre"
                    placeholder='Nombre'
                    onChange={props.guardarUsuario}
                    name='nombre'>
                    
                </input>
                <label htmlFor="email">Ingrese su Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder='email'

                    onChange={props.guardarUsuario}
                    name="email"
                    >
                </input>
                <label htmlFor="telefono">Ingrese su Telefono</label>
                <input
                    type="tel"
                    id="telefono"
                    placeholder='telefono'
                    onChange={props.guardarUsuario}
                    name="telefono"
                    >
                </input>
                <button 
                    className="form--submit"
                    onClick={props.handleSubmit}
                >
                    guardar Compra
                </button>

            </form>

        </div>;
};

export default Form;
