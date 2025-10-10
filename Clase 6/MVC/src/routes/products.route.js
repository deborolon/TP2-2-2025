import express from "express"
import productsController from "../controller/products.controller.js"

const router = express.Router()

//Se realiza la declaración de los endpoints: router + verbo + "/url" + funcion del controlador para ese verbo
//la función que llamo que se encuentra dentro del controlador no se ejecuta, no se inicializa
router.get("/products", productsController.getProducts)
router.post("/products", productsController.postProducts)
router.put("/products/:id", productsController.putProducts)

export default router