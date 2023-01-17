import "./Carrito.css";
import CardCarrito from "../Components/CardCarrito/CardCarrito";
import { useState } from "react";
import { useEffect } from "react";

export default function Carrito() {  
  let [carrito,setCarrito] = useState([])
  
  useEffect(() => {
    if (localStorage.getItem("carrito")) {
      setCarrito(JSON.parse(localStorage.getItem("carrito")))
    }
  }, [carrito]);

  let total = 0
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].valor;
  }

  return (
    <div className="carrito">
      <div className="tituloCarrito">
        <p>Carrito</p>
      </div>
      <div className="pago">
          {
          carrito.length===0?
          <p className='vacio'>'Tu carrito esta vacio'</p>:(
            <>
            <div className="lista container-fluid">
              {carrito.map(producto => (
                <CardCarrito producto={producto} carrito={carrito}></CardCarrito>
              ))}
            </div>
            <div className="resumen">
              <div className="titulo-resumen">Resumen de Compra</div>
              <div className="total">
                <div className="palabratotal">Total:</div>
                <div classname="valortotal">{total}</div>
              </div>
              <button className="btn btn-success">Iniciar Pago</button>
            </div>
            </>
          )}
          

      </div>
    </div>
  );
}
