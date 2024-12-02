const Spread = () => {
    // Variables con valor por copia (variables primitivas number, string, booleanos)
    /* let nombre1 = "Luján";
    let nombre2 = nombre1; // copiar el contenido de la variable nombre1 en nombre2
    nombre2 = "Sebas";
    console.log(nombre1);
    console.log(nombre2); */
    
    // Variables con valor por referencia (objetos y arrays)
    // Objetos
    /* const bebida1 = {id:1, nombre:"Coca Cola", precio:1800}; // objeto original
    const bebida2 = bebida1; // referencia del objeto original (bebida1)
    bebida2.precio = 2500;
    bebida1.nombre = "Pepsi";
    console.log(bebida1);
    console.log(bebida2); */
    // Arrays
    const bebidas1 = ["coca cola", "pepsi", "seven up"]; // array original
    const bebidas2 = bebidas1; // referencia del array original (bebidas1)
    bebidas2.push("manaos");
    //console.log(bebidas1);
    //console.log(bebidas2);
    // Como crear un nuevo array #1
    /* const bebidas3 = [bebidas1[0], bebidas1[1], bebidas1[2]];
    bebidas3.push("sprite");
    console.log(bebidas1);
    console.log(bebidas3); */
    // Como crear un nuevo array #2 con método concat
    /* const bebidas3 = bebidas1.concat(["sprite"]);
    bebidas3.push("pretty limón");
    console.log(bebidas1);
    console.log(bebidas3); */
    // Como crear un nuevo array #3 con método filter
    /* const productos = [
        {id:1, nombre:"Coca Cola", precio:2000, tieneAzucar:true},
        {id:2, nombre:"Pepsi Zero", precio:1800, tieneAzucar:false},
        {id:3, nombre:"Seven Up", precio:1700, tieneAzucar:true}
    ]
    const nuevosProductos = productos.filter(item => item.tieneAzucar == true)
    nuevosProductos.push({id:4, nombre:"Manaos", precio:1600});
    console.log(productos);
    console.log(nuevosProductos); */
    
    // Operador Spread
    // Operarador Spread con Objetos
    /* const bebida1 = {id:1, nombre:"Coca Cola", precio:1800};
    const bebida2 = {diet:false, ...bebida1, id:10, categoria:"bebidas"}; // generar un nuevo objeto desparramando las propiedades del objeto bebida1
    bebida2.precio = 2500;
    bebida1.nombre = "Pepsi";
    console.log(bebida1);
    console.log(bebida2); */
    // Operador Spread con Arrays
    const productos = [
        {id:1, nombre:"Coca Cola", precio:2000, tieneAzucar:true},
        {id:2, nombre:"Pepsi Zero", precio:1800, tieneAzucar:false},
        {id:3, nombre:"Seven Up", precio:1700, tieneAzucar:true}
    ]
    const productos2 = [{id:0, nombre:"[SIN NOMBRE]", precio:0}, ...productos, {id:5, nombre:"Pretty Limón", precio:1500}]; // generar un nuevo array desparramando cada elemento del array productos
    productos2.push({id:4, nombre:"Manaos", precio:1600});
    console.log(productos);
    console.log(productos2);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Operador Spread</h1>
                </div>
            </div>
        </div>
    )
}

export default Spread