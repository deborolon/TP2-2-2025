import ProductsService from "../services/Products.service.clases.js";
import authMiddleware from "../middleware/jwt.middleware.js";

class ProductsController {
  constructor() {
    this.service = new ProductsService();
  }

  postLogin = async (req, res) => {
    //data por headers
    const data = req.headers
    //condicional que valide que existan user y password
    const tkn = await authMiddleware.generateToken(data)
    res.send(tkn)
  }

  getProducts = async (req, res) => {
    const products = await this.service.getProducts();
    // res.send(products);
    //bloque try/catch en caso de exito y error
    try {
      res.status(200).json({
        status: 'success',
        data: products
      })
    } catch (error) {
        res.status(500).json({
          status: 'error',
          data: "Server error. Try again later."
        })
    }
  }

  postProducts = async (req, res) => {
    const prod = req.body;
    const data = await this.service.postProducts(prod);
    // res.send(data);
    res.status(200).json({
      status: 'success',
      data: prod
    })
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
