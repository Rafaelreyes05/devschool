import { Link } from "react-router-dom";

export default function CartWidget({carrito}){
    
    return(
        <>
            <span className="material-symbols-outlined">shopping_cart</span>
            <Link to="/carrito">
                {`Carrito${carrito.length>0?`(${carrito.length})`:''}`}
            </Link>
        </>
    )
}