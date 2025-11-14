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
    //La idea de esta función o de una función login es obtener el token
    //por convención el login tiene que ser un método POST
    this.router.post("/login", this.controller.postLogin);

    //los usuarios tienen que tener el token para acceder a ver estos productos
    this.router.get("/products", authMiddleware.validateToken, this.controller.getProducts);

    this.router.post("/products", validationMiddleware.validateProduct, this.controller.postProducts);

    this.router.put("/products/:id", this.controller.putProducts);

    this.router.patch("/products/:id", this.controller.patchProducts);

    this.router.delete("/products/delete/:id", this.controller.deleteProducts);

    return this.router;
  }
}

export default ProductsRoutes;
