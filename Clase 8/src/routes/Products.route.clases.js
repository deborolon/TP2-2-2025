import express from "express";
import ProductsController from "../controller/Products.controller.clases.js";
import validationMiddleware from "../middleware/validation.middleware.js";

class ProductsRoutes {
  constructor() {
    this.router = express.Router();
    this.controller = new ProductsController();
  }

  start() {
    this.router.get("/products", this.controller.getProducts);

    this.router.post("/products", validationMiddleware.validateProduct, this.controller.postProducts);

    this.router.put("/products/:id", this.controller.putProducts);

    this.router.patch("/products/:id", this.controller.patchProducts);

    this.router.delete("/products/delete/:id", this.controller.deleteProducts);

    return this.router;
  }
}

export default ProductsRoutes;
