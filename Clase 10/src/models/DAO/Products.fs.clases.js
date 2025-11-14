import fs from "fs";

class ProductsFsClases {
  constructor() {
    this.filePath = "./products.json";
  }

  getProducts = async () => {
    const data = await fs.promises.readFile(this.filePath, "utf-8");
    return JSON.parse(data);
  };

  postProducts = async (prod) => {
    const products = await this.getProducts();
    prod.id = products.length <= 0 ? 1 : products[products.length - 1].id + 1;
    products.push(prod);
    await fs.promises.writeFile(this.filePath, JSON.stringify(products, null, 2));
    return prod;
  };

  putProducts = async (id, prod) => {
    const products = await this.getProducts();
    const index = products.findIndex((e) => e.id == id);
    if (index === -1) {
      return "Error. No se encontró id.";
    }
    prod.id = Number(id);
    products.splice(index, 1, prod);
    await fs.promises.writeFile(this.filePath, JSON.stringify(products, null, 2));
    return prod;
  };

  patchProducts = async (id, prod) => {
    const products = await this.getProducts();
    const index = products.findIndex((e) => e.id == id);
    if (index === -1) {
      return "Error. No se encontró id.";
    }
    const newProd = { ...products[index], ...prod };
    newProd.id = Number(id);
    products.splice(index, 1, newProd);
    await fs.promises.writeFile(this.filePath, JSON.stringify(products, null, 2));
    return newProd;
  };

  deleteProducts = async (id) => {
    const products = await this.getProducts();
    const index = products.findIndex((e) => e.id == id);
    if (index !== -1) {
      products.splice(index, 1);
      await fs.promises.writeFile(this.filePath, JSON.stringify(products, null, 2));
      return "El elemento fue eliminado correctamente.";
    }
    return "El índice no existe.";
  };
}

export default ProductsFsClases;
