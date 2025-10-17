import Factory from "../models/DAO/dao.factory.js"

const productsModel = await Factory("FS")

const getProducts = async () => {
    const products = await productsModel.getProducts()
    return products
}

const postProducts = async (prod) => {
    const products = await productsModel.postProducts(prod)
    return products
}

const putProducts = async (id, prod) => {
    const products = await productsModel.putProducts(id, prod)
    return products
}

const patchProducts = async (id, prod) => {
    const products = await productsModel.patchProducts(id, prod)
    return products
}

const deleteProducts = async (id) => {
    const products = await productsModel.deleteProducts(id)
    return products
}

export default {
    getProducts,
    postProducts,
    putProducts,
    patchProducts,
    deleteProducts
}