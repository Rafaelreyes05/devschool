import './Menu.css'

export default function Menu() {
    const lista = ['Home', 'Cursos', 'Comunidad', 'Nosotros'];
    const obj=[];
    for (let i=0;i<lista.length;i++){
        obj.push({pos:i,nombre:lista[i]});
    }
    return(
        <div className="col-md-5 menu">{
            obj.map(elem=>
                <div key={elem.pos} className="menuItem">
                    <a href={`/${elem.nombre}`}>{elem.nombre}</a>
                </div>
            )}
        </div>
    )
}
