const products = [
    {id: 1, name: "Monitor", color: "Negro"},
    {id: 2, name: "Mouse", color: "Violeta"},
    {id: 3, name: "Hub", color: "Gris"},
    {id: 4, name: "Notebook", color: "Verde"}
]

const getProducts = async () => {
    return await products
}

const postProducts = async (prod) => {
    products.push(prod)
    return await prod
}

const putProducts = async (id, prod) => {
    const index = products.findIndex((e) => e.id == id)
    if(index == -1){
        return "Error. No se encontró el id."
    } else {
        prod.id = Number(id)
        products.splice(index, 1, prod)
        return prod
    }
}

const patchProducts = async (id, prod) => {
    const index = products.findIndex((e) => e.id == id)
    if(index == -1){
        return "Error. No se encontró el id."
    } else {
        const newProd = {...products[index], ...prod}
        products.splice(index, 1, newProd)
        return newProd
    }
}
const deleteProducts = async (id) => {
    const index = products.findIndex((e) => e.id == id)
    if (index != -1) {
        products.splice(index, 1)
        return "El elemento fue eliminado correctamente."
    }
    return "El índice no existe."
}

export default {
    getProducts,
    postProducts,
    putProducts,
    patchProducts,
    deleteProducts    
}