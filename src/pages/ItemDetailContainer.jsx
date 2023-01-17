import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card/Card";
import '../firebase/config'
import {getFirestore,doc,getDoc} from 'firebase/firestore'

export default function Curso(){
    const [curso, setCurso] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const querydb = getFirestore()
        const queryDoc = doc(querydb,'productos',id)
        getDoc(queryDoc)
        .then(res => {
            setCurso({id:res.id,...res.data()});
            //console.log({id:res.id,...res.data()});
            return
            }
        )
    }, [id]);


    return(
        <div className="curso lista-cursos">
            <Card producto={curso} btn={false}>
                {curso.nombre}
            </Card>
        </div>
    )

}