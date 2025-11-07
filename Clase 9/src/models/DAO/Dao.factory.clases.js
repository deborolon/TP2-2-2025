import ProductsModelClases from "./Products.model.clases.js";
import ProductsFsClases from "./Products.fs.clases.js";
import ProductsMongoClases from "./Products.mongo.clases.js";

class ProductsFactory {
    static create(type) {
        switch (type) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor.");
                return new ProductsModelClases();
            case "FS":
                console.log("Persistiendo en File System.");
                return new ProductsFsClases();
            case "MONGO":
                console.log("Persistiendo en MongoDB.");
                return new ProductsMongoClases();
            default:
                console.log("Persistiendo en la memoria default.");
                return new ProductsModelClases();
        }
    }
}

export default ProductsFactory;
