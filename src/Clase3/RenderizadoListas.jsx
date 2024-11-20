const RenderizadoListas = () => {
    const desayunos = [
        {id:1, nombre:"Té"},
        {id:2, nombre:"Café"},
        {id:3, nombre:"Mate"},
        {id:4, nombre:"Chocolatada"},
        {id:5, nombre:"Capuccino"},
        {id:6, nombre:"Té"}
    ];

    const hamburguesas = [
        {id:1, nombre:"Hamburguesa", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar"},
        {id:2, nombre:"Hamburguesa con Queso", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar"},
        {id:3, nombre:"McFiesta", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXakvb9/200/200/original?country=ar"},
        {id:4, nombre:"Doble Carne Doble Queso", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$krXm2g5T/200/200/original?country=ar"},
        {id:5, nombre:"Triple Hamburguesa con Queso", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXsCqnz/200/200/original?country=ar"},
    ]

    return (
        <div className="container">
            <div className="row">
                <h1>Renderizado Listas</h1>
                <h3>Hamburguesas</h3>
                {hamburguesas.map(item => (
                    <div className="col-md-3">
                        <div className="card text-center border-0 shadow p-3 mb-5 bg-body-tertiary rounded" key={item.id}>
                            <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                            <div className="card-body">
                                <p className="card-text">{item.nombre}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <h3>Desayunos</h3>
                <ul>
                    {desayunos.map(item => (
                        <li key={item.id}>{item.nombre}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RenderizadoListas