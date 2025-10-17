import express from "express"
import productsController from "../controller/products.controller.js"
import validationMiddleware from "../middleware/validation.middleware.js"

const router = express.Router()

//El middleware siempre está situado antes del controlador!!!
router.get("/products", productsController.getProducts)
router.get("/products/:type", productsController.getProductsByType)
router.post("/products", validationMiddleware.validateProduct, productsController.postProducts)
router.patch("/products/:id", productsController.patchProducts)
router.delete("/products/delete/:id", productsController.deleteProducts)

export default router