import logo from'./logo.png'
import './Logo.css'

function Logo(){
    return (
        <a href="/"><img className="justify-content-center" src={logo} alt="logo" /></a>
    )
}

export default Logo