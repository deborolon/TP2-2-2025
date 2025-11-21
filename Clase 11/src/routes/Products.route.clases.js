import express from "express";
import ProductsController from "../controller/Products.controller.clases.js";
import validationMiddleware from "../middleware/validation.middleware.js";
import authMiddleware from "../middleware/jwt.middleware.js";

class ProductsRoutes {
  constructor() {
    this.router = express.Router();
    this.controller = new ProductsController();
  }

  start() {

  /**
   * @swagger
   * /api/login:
   *   post:
   *     description: Login
   *     responses:
   *       200:
   *         description: Token de autenticación
   */
  this.router.post("/login", this.controller.postLogin);

  /**
   * @swagger
   * /api/products:
   *   get:
   *     description: Retorna todos los productos disponibles
   *     responses:
   *       200:
   *         description: Lista de productos
   */
  this.router.get("/products", authMiddleware.validateToken, this.controller.getProducts);

  this.router.post("/products", validationMiddleware.validateProduct, this.controller.postProducts);

  this.router.put("/products/:id", this.controller.putProducts);

  this.router.patch("/products/:id", this.controller.patchProducts);

  this.router.delete("/products/delete/:id", this.controller.deleteProducts);

  return this.router;
  }
}

export default ProductsRoutes;
