import productsModel from "../models/products.model.js"

//Lógica del negocio (finanzas, salud, e-commerce, etc)

const getProducts = async () => {
    const products = await productsModel.getProducts()
    return products
}

const postProducts = async (prod) => {
    //Podría existir validación más fina
    const products = await productsModel.postProducts(prod)
    return products
}

const putProducts = async (id, prod) => {
    const products = await productsModel.putProducts(id, prod)
    return products
}

export default {
    getProducts,
    postProducts,
    putProducts
}