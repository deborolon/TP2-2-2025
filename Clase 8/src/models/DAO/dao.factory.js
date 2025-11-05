import productsModelMemory from "./products.model.js"
import productsModelFs from "./products.fs.js"

const Factory = async (type) => {
    switch (type) {
        case "MEM":
            console.log("Persistiendo en la memoria del servidor.")
            return await productsModelMemory
        case "FS":
            console.log("Persistiendo en File System.")
            return await productsModelFs
        default:
            console.log("Persistiendo en la memoria default.")
            return await productsModelMemory
    }
}

export default Factory