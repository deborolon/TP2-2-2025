import ProductsModelClases from "./Products.model.clases.js";

class ProductsFactory {
    static create(type) {
        switch (type) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor.");
                return new ProductsModelClases();
            default:
                console.log("Persistiendo en la memoria default.");
                return new ProductsModelClases();
        }
    }
}

export default ProductsFactory;
