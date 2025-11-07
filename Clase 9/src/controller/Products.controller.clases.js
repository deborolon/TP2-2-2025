import ProductsService from "../services/Products.service.clases.js";

class ProductsController {
  constructor() {
    this.service = new ProductsService();
  }

  getProducts = async (req, res) => {
    const products = await this.service.getProducts();
    res.send(products);
  }

  postProducts = async (req, res) => {
    const prod = req.body;
    const data = await this.service.postProducts(prod);
    res.send(data);
  }

  putProducts = async (req, res) => {
    const { id } = req.params;
    const prod = req.body;
    const data = await this.service.putProducts(id, prod);
    res.send(data);
  }

  patchProducts = async (req, res) => {
    const { id } = req.params;
    const prod = req.body;
    const data = await this.service.patchProducts(id, prod);
    res.send(data);
  }

  deleteProducts = async (req, res) => {
    const { id } = req.params;
    const data = await this.service.deleteProducts(id);
    res.send(data);
  }
}

export default ProductsController;
