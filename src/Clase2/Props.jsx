import Certificado from "../Clase1/Certificado";

// Componente recibio una prop como parámetro (objeto)
/* const Props = (prop) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-primary">{prop.academia}</h1>
                    <h3 className="text-success">{prop.curso}</h3>
                    <p>{prop.descripcionCurso.descripcion}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="text-primary">{prop.descripcionCurso.tituloCertificado}</h2>
                    <p>{prop.descripcionCurso.descripcionCertificado}</p>
                </div>
                <div className="col">
                    <Certificado />    
                </div>
            </div>
        </div>
    )
} */

// Definir un Componente Interno (solo puede ser accedido en el Componente llamado Props)
export const CertificarConocimientos = ({titulo, descripcion}) => {
    return (
        <div className="row">
            <div className="col">
                <h2 className="text-primary">{titulo}</h2>
                <p>{descripcion}</p>
            </div>
            <div className="col">
                <Certificado />    
            </div>
        </div>
    )
}


// Componente desestrucutrando los datos de una prop
/* const Props = ({academia, curso, descripcionCurso}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-primary">{academia}</h1>
                    <h3 className="text-success">{curso}</h3>
                    <p>{descripcionCurso.descripcion}</p>
                </div>
            </div>
            <CertificarConocimientos titulo={descripcionCurso.tituloCertificado} descripcion={descripcionCurso.descripcionCertificado} />
        </div>
    )
} */

// Componente que recibe contenido html vía propiedad "children"
const Props = ({tamanio, otroCurso, children}) => {
    tamanio = "display-6";

    return (
        <div className="container">
            <div className="row">
                <div className={`col ${tamanio}`}>
                    {children}
                </div>
            </div>
            <div className="row">
                <div className="col bg-dark text-white text-center fs-1 p-1">
                    <p>{otroCurso}</p>
                </div>
            </div>
        </div>
    )
}

export default Props