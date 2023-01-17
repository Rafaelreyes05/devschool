import './ButtonComprar'
import swal from 'sweetalert';
//import { useEffect } from "react";
import { useState } from 'react';

export default function ButtonComprar({curso}){
    let [carrito,setCarrito] = useState([])
    
    if (localStorage.getItem("carrito")) {
        carrito=JSON.parse(localStorage.getItem("carrito"))
    }
    let count = Boolean((carrito.filter(element => element.id === curso.id)).length)

    function agregar(curso) {
        
        if (count === false) {
            console.log(carrito)
            setCarrito(carrito.push(curso))
            localStorage.setItem("carrito", JSON.stringify(carrito))
            swal({
                title: "Felicitaciones!",
                text: "Haz agregado el producto al carrito.",
                icon: "success",
                buttons: {
                    cancel: "Seguir comprando",
                    defaut: "Ir al carrito"
                }
            })
            .then(value => {
                switch (value) {
                    case "defaut":
                        // eslint-disable-next-line no-restricted-globals
                        location.href='/carrito';
                        break
                    case 'cancel':
                        // eslint-disable-next-line no-restricted-globals
                        location.href='/Cursos';
                        break
                    default:
                        {}

                }
            });
        }
        else {
            swal({
                title: "Atención!",
                text: "Ya has agregado el producto.",
                icon: "warning",
            });
        }
    }

    return(
        <div className="botonCurso">
            <button 
                className={`btn ${count?'btn-success':'btn-primary'}`} 
                data-toggle="modal" 
                data-target="#exampleModalCenter"
                onClick={()=>agregar(curso)}
                >
                    {count?'Agregado al carrito':'Comprar'}
            </button>
        </div>         
    )

}