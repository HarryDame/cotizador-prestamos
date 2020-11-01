import React,{Fragment, useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Message';
import Result from './components/Result';
import Spinner from './components/Spinner';

// Galeria de albumes
// El objetivo es tomar el array "albumes" e iterar la coleccion para poder construir una galeria de albumes. Para esto deberas crear el componente Album y pasar las props necesarias para renderizar dicha pieza.

function App() {
// Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("");
  const [total ,guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

let componente;

if (cargando) {
  componente = <Spinner/> 
}else if (total === 0) {
  componente = <Message/>
} else {
  componente = <Result
  total={total}
  plazo={plazo}
  cantidad={cantidad}
  
  />
}



  return (
    <Fragment>      
      <Header
      titulo="Cotizador de Prestamos"
      
      />

    <div className="container">
    <Form
    cantidad={cantidad}
    guardarCantidad={guardarCantidad}
    plazo={plazo}
    guardarPlazo={guardarPlazo}
    guardarTotal={guardarTotal}
    guardarCargando={guardarCargando}
    />
    <div className="mensajes">
    {componente}</div>
  </div>
    </Fragment>

  );
}

export default App;
