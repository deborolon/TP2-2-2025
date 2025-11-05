// import productsService from "../services/products.service.js"
import ProductsService from "../services/Products.service.clases.js"

const productsService = new ProductsService()

const getProducts = async (req, res) => {
    const products = await productsService.getProducts()
    res.send(products)
}

const postProducts = async (req, res) => {
    const prod = req.body
    const data = await productsService.postProducts(prod)
    res.send(data)
}

// function name(params) {
    
// }

const putProducts = async (req, res) => {
    const { id } = req.params
    const prod = req.body
    const data = await productsService.putProducts(id, prod)
    res.send(data)
}

const patchProducts = async (req, res) => {
    const { id } = req.params
    const prod = req.body
    const data = await productsService.patchProducts(id, prod)
    res.send(data)
}

const deleteProducts = async (req, res) => {
    const { id } = req.params
    const data = await productsService.deleteProducts(id)
    res.send(data)
}

export default {
    getProducts,
    postProducts,
    putProducts,
    patchProducts,
    deleteProducts
}