import './Pay.css'
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export default function Pay() {
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

  const pagarHandler = (event) => {
    event.preventDefault()
    localStorage.removeItem('carrito');
    window.location.href='/paid';
  }

  return(
    <div className="contenedor__formulario">
      <div className='totalpay'>
        <div>{`Total a pagar: $ ${total}`}</div>
      </div>
    <form onSubmit={pagarHandler}>
      <label for="inputEmail4">Numero de tarjeta</label>
      <input type="number" className="form-control" id="inputcard" placeholder="0000 0000 0000 0000" required/>

      <label for="inputEmail4">Vencimiento</label>
      <input type="number" className="form-control" id="inputexp" placeholder="MM/YY" required/>

      <label for="inputEmail4">Codigo de seguridad</label>
      <input type="number" className="form-control" id="inputcode" placeholder="123" required/>

      <label for="inputEmail4">Nombre</label>
      <input type="text" className="form-control" id="inputname" placeholder="Name" required/>

        <label for="inputEmail4">Email</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>

      <label for="inputAddress">Address</label>
      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required/>

      <label for="inputAddress2">Address 2</label>
      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" required/>

        <label for="inputCity">City</label>
        <input type="text" className="form-control" id="inputCity" required/>
  
        <label for="inputState">State</label>
        <input id="inputState" className="form-control" required />

        <label for="inputZip">Zip</label>
        <input type="text" className="form-control" id="inputZip" required/>
        <br />

        <button type ='submit' className="btn btn-primary">Pagar</button>
        </form>
      </div>
  )}