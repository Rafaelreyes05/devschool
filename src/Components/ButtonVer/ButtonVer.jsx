import './ButtonVer'
import { Link } from "react-router-dom";

export default function ButtonVer({id}){
    return(
        <div className="botonCurso">
            <button 
                className={`btn btn-primary`} 
                data-toggle="modal" 
                data-target="#exampleModalCenter"
                >
            <Link to={`/Cursos/item/${id}`}>Ver mas</Link>
            </button>
        </div>         
    )

}