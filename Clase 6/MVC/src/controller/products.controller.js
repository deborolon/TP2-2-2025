import productsService from "../services/products.service.js"

//El controlador se encarga del manejo de la solicitud y la generación de la respuesta

const getProducts = async (req, res) => {
    const products = await productsService.getProducts()
    res.send(products)
}

const postProducts = async (req, res) => {
    const prod = req.body
    //Podría validar que por ejemplo, el objeto no esté vacío !!!
    const data = await productsService.postProducts(prod)
    res.send(data)
}

const putProducts = async (req, res) => {
    const { id } = req.params
    const prod = req.body
    const data = await productsService.putProducts(id, prod)
    res.send(data)
}

export default {
    getProducts,
    postProducts,
    putProducts
}