import React, {Fragment, useState } from 'react';
import {calcularTotal} from './helpes';

const Form = (props) => {
const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando} = props;
//Definir state
const [error, guardarError] = useState(false);

//Calculamos el prestamo
const calcularPrestamo = e =>{
    e.preventDefault();
    //Validar
    if (cantidad === 0 || plazo === '') {
        guardarError(true);
        return;
    }
    //Eliminar el error previo
    guardarError(false);
    //Habilito el spinner
    guardarCargando(true);
    //Realizar cotización (con spinner en la espera)
    setTimeout(()=>{
        const total = calcularTotal(cantidad,plazo);

        //Guardar el total
    guardarTotal(total);

    //Deshabilitar el spinner
    guardarCargando(false);
}, 3000);
    
   
    

}

    return ( 
        <Fragment>
        <form onSubmit={calcularPrestamo}>
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange={e => guardarCantidad(parseInt(e.target.value))}
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={e => guardarPlazo(parseInt(e.target.value))}
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                      <option value="48">48 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
        </form>
{(error)?<p className="error">Todos los campos son obligatoiros</p>:null }


</Fragment>
     );
}
export default Form;