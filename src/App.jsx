import Contador from "./Clase2/Contador"
import Props from "./Clase2/Props"
import {CertificarConocimientos} from "./Clase2/Props"
import States from "./Clase2/States"

function App() {
  const datosCurso = {
    descripcion:"Domina el Framework JavaScript más demandado en la industria para el desarrollo Front End. Aprende a construir un proyecto real desde cero utilizando las mejores prácticas del mercado laboral.",
    tituloCertificado:"Certifica tus conocimientos",
    descripcionCertificado:"Tu certificado de EducaciónIT está respaldado por las más de 9.000 empresas que confían en nosotros para capacitar y reclutar a sus colaboradores, en todo LATAM."
  }

  return (
    <>
      {/* <Props academia={"Educación IT"} curso={"Curso de React JS Developer"} descripcionCurso={datosCurso} /> */}
      {/* <CertificarConocimientos titulo="hola" descripcion="chau" /> */}
      {/* <Props tamanio={"display-5"} otroCurso={"Node JS"}>
        <h1 className="text-primary">Educación IT</h1>
        <h3 className="text-success">Curso de React JS Developer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio culpa officiis consequuntur itaque sit inventore quae quidem. Recusandae repellendus illo, modi, illum, commodi hic sequi autem suscipit asperiores quod et!</p>
        <CertificarConocimientos titulo={datosCurso.tituloCertificado} descripcion={datosCurso.descripcionCertificado} />
      </Props> */}
      {/* <States /> */}
      <Contador inicio={1} fin={5} />
    </>
  )
}

export default App