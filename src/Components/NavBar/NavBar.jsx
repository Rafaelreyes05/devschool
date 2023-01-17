import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css'
import { useEffect,useState } from "react";

export default function Navbar() {
  let [carrito,setCarrito] = useState([])
  useEffect(() => {
    if (localStorage.getItem("carrito")) {
      setCarrito(JSON.parse(localStorage.getItem("carrito")))
    }
  }, [carrito]);

  return (
      <nav className="row">
        <div className="logo col-md-2">
        <Logo />
        </div>
        
        <Menu />

        <div className="col-md-3"></div>
          <div className="col-md-2 menu">
            <div className="menuItem">
              <CartWidget carrito={carrito}/>
            </div>
            <div className="menuItem"><a href="singin.html">Iniciar Sesion</a></div>
          </div>
      </nav>
    )
}