import './Card.css';
import ButtonVer from '../ButtonVer/ButtonVer';
import ButtonComprar from '../ButtonComprar/ButtonComprar';

export default function Card({producto,btn}){
  let {nombre,valor,categoria,id} = producto
  
  return (
    <div className="card">
      <div className="nombreCurso"><p>{nombre}</p></div><br /><br />
      <div className="subtitleCurso">
        <p>Categoria: {categoria}</p>
        <p>$ {valor}</p>
      </div>
      {btn?(<ButtonVer id={id} />):(<ButtonComprar curso={producto} />)}
    </div>
  )
}