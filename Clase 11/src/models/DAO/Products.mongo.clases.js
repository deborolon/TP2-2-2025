import MongoDBConnection from "../MongoDBConnection.js";
import { ObjectId } from "mongodb";

class ProductsMongoClases {
  constructor() {
    this.collection = "products";
  }

  getProducts = async () => {
    const data = await MongoDBConnection.db.collection(this.collection).find().toArray();
    return data;
  };

  postProducts = async (prod) => {
    const data = await MongoDBConnection.db.collection(this.collection).insertOne(prod);
    return data;
  };

  putProducts = async (id, prod) => {
    //El id que viene por params es un string, y hay que hacer la conversión a ObjectId -> createFromHexString
    console.log("ID: ", typeof(id), id);
    const idmongo = ObjectId.createFromHexString(id);
    console.log("ID: ", typeof(idmongo), idmongo);
    const data = await MongoDBConnection.db.collection(this.collection).replaceOne({ _id: ObjectId.createFromHexString(id) }, prod);
    return data
  };

  patchProducts = async (id, prod) => {
    const data = await MongoDBConnection.db.collection(this.collection).updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: prod });
    return data;
  };

  deleteProducts = async (id) => {
    const data = await MongoDBConnection.db.collection(this.collection).deleteOne({ _id: ObjectId.createFromHexString(id) });
    return data;
  };
}

export default ProductsMongoClases;
