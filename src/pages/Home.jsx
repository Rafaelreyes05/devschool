import ImagenPortada from './programming.png'
import './Home.css'

export default function Home() {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="parrafo col-md-5">
                        <br /><br /><br /><br /><br />
                            <h2>Domina la tecnologia con</h2>
                            <h1>DEV SCHOOL</h1>
                            <p>Clases online en vivo dictadas por referentes de la industria, enfoque 100% práctico, mentorías personalizadas y acceso a una comunidad de +70,000 estudiantes.</p>
                        </div>
                            <div className="imagenPortada col-md-7">
                                <img src={ImagenPortada} alt="programming" />
                            </div>
                        </div>
                        </div>
                        </section>
                        )
}