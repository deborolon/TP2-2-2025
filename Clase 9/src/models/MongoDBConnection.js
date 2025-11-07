import { MongoClient } from 'mongodb';

class MongoDBConnection {

    static client = new MongoClient("mongodb://localhost:27017")
    //Acá se puede cambiar el nombre de acuerdo a la base de datos.
    static db = this.client.db("prueba");
}

export default MongoDBConnection;