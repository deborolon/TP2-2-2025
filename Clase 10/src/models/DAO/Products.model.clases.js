class ProductsModelClases {
  constructor() {
    this.products = [
      { id: 1, name: "Monitor", color: "Negro" },
      { id: 2, name: "Mouse", color: "Violeta" },
      { id: 3, name: "Hub", color: "Gris" },
      { id: 4, name: "Notebook", color: "Verde" },
    ];
  }
  getProducts = async () => {
    const data = await this.products;
    return data;
  }

  postProducts = async (prod) => {
    prod.id = this.products.length <= 0 ? prod.id = 1 : this.products[this.products.length -1].id + 1
    await this.products.push(prod);
    return prod;
  }

  putProducts = async (id, prod) => {
    const index = this.products.findIndex((e) => e.id == id);
    if (index === -1) {
      return "Error. No se encontró id.";
    }
    prod.id = Number(id);
    this.products.splice(index, 1, prod);
    return prod;
  }

  patchProducts = async (id, prod) => {
    const index = this.products.findIndex((e) => e.id == id);
    if (index === -1) {
      return "Error. No se encontró id.";
    }
    const newProd = { ...this.products[index], ...prod };
    newProd.id = Number(id);
    this.products.splice(index, 1, newProd);
    return newProd;
  }

  deleteProducts = async (id) => {
    const index = this.products.findIndex((e) => e.id == id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return "El elemento fue eliminado correctamente.";
    }
    return "El índice no existe.";
  }
}

export default ProductsModelClases;