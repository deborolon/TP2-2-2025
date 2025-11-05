import ProductsFactory from "../models/DAO/Dao.factory.clases.js";

class ProductsService {
  constructor(model) {
    this.model = ProductsFactory.create("MEM");
  }

  getProducts = async () => {
    const products = await this.model.getProducts();
    return products;
  }

  postProducts = async (prod) => {
    const products = await this.model.postProducts(prod);
    return products;
  }

  putProducts = async (id, prod) => {
    const products = await this.model.putProducts(id, prod);
    return products;
  }

  patchProducts = async (id, prod) => {
    const products = await this.model.patchProducts(id, prod);
    return products;
  }

  deleteProducts = async (id) => {
    const products = await this.model.deleteProducts(id);
    return products;
  }
}

export default ProductsService;
