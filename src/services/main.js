/*function agregar(id) {
    let count = Boolean(carrito.filter((element) => element.id == id).length)
    if (count == false) {
        let curso = cursos.filter((elemento) => elemento.id === id)
        carrito.push(curso[0])
        localStorage.setItem("carrito", JSON.stringify(carrito))
        document.getElementById("carritoCantidad").innerHTML = `Carrito (${carrito.length})`
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
                    location.href='carrito.html'
                    break
                default:
                    generarCursos()
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
*/