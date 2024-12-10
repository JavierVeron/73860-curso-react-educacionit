const Promesas = () => {
    // 3 estados => 1. Pendiente (pending) 2. Rechazada (rejected) 3. Completada (fullfilled)
    const promesa = (devolver) => {
        return new Promise((resolve, reject) => {
            console.log("Procesando...");
            const productos = [
                {id:1, nombre:"Coca Cola"},
                {id:2, nombre:"Pepsi"}
            ]

            if (devolver) {
                resolve(productos);
            } else {
                reject("Error! No se encontraron Productos!")
            }
        })
    };

    promesa(true)
    //console.log(promesa(false))
    .then(respuesta => { // cuando la repuesta de la promesa se completa (then)
        console.info(respuesta);
    })
    .catch(error => { // cuando la respuesta de la promesa no se complete (catch)
        console.error(error);
    })
    .finally(() => {
        console.log("Ejecución finalizada!");
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Promesas</h1>
                </div>
            </div>
        </div>
    )
}

export default Promesas