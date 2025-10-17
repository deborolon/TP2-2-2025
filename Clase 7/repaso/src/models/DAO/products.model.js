const products = [
    {id: 1, name: "Auriculares JBL", productType: "electro", price: 299.99},
    {id: 2, name: "Auriculares Logitech", productType: "electro", price: 399.99},
    {id: 39, name: "Auriculares Logitech", productType: "electro", price: 399.99},
    {id: 39, name: "Taza coleccionable", productType: "bazar", price: 99.99},
    {id: 39, name: "Mate", productType: "general", price: 99.99}
]

const getProducts = async () => {
    return await products
}

const getProductsByType = async (type) => {
    const dataProducts = await products.filter((e) => e.productType == type)
    const dataCount = await dataProducts.length
    return await {
        total: dataCount,
        products: dataProducts
    }
}

const postProducts = async (prod) => {
    //antes de hacer el push del producto -> añadir ID
    prod.id = products[products.length-1].id + 1
    products.push(prod)
    return await prod
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
    getProductsByType,
    postProducts,
    patchProducts,
    deleteProducts    
}