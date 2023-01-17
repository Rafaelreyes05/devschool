import './CardCarrito.css'

export default function CardCarrito({producto,carrito}){    
    let {id,nombre,valor} = producto
    function eliminar(id) {
        let narray = []
        for (let x of carrito) {
            if (x.id !== id) {
                narray.push(x)
            }
        }
        localStorage.setItem("carrito", JSON.stringify(narray))
        //setCarrito(JSON.parse(localStorage.getItem("carrito")))
    }

    return(
        <div className="producto row">
                <div className="nombreCursoCarrito col-md-6">{nombre}</div>
                <div className="buttonEliminar col-md-4">
                    <button className="btn btn-primary" onClick={()=>eliminar(id)}>
                        Eliminar
                    </button>
                </div>
                <div className="subtotal col-md-2">$ {valor}</div>
        </div>
    )
}