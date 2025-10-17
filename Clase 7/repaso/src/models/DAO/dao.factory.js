//DAO -> Data access objetc
//Reúne todos los objetos de datos en un solo lugar: ODM, ORM, entidades, conexiones a bases de datos, etc

//Factory -> patrón de creación
//Crear objetos desconociendo de que trata cada uno

//Index (inicio de la app) -> rutas -> controlador -> servicios -> Factory -> DAO/modelos
import productsModelMemory from "./products.model.js"

const Factory = async (type) => {
    switch (type) {
        case "MEM":
            console.log("Persistiendo en la memoria del servidor.")
            return await productsModelMemory
        default:
            console.log("Persistiendo en la memoria default.")
            return await productsModelMemory
    }
}

export default Factory