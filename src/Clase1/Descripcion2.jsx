import React from "react"

// Declaración de un Componente basado en Clases
class Descripcion2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <p>{this.props.texto}</p>
        )
    }
}

export default Descripcion2