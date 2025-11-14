//Driver que permite la conexión con MongoDB
import { MongoClient } from 'mongodb';

class MongoDBConnection {

    //Conexión a la base de datos local
    //static client = new MongoClient("mongodb://localhost:27017")
    //Conexión a la base de datos en la nube Mongo Atlas
    //Acá usuario y contraseña de Mongo Atlas, apartado "Security" -> "Database & Network Access"
    //Validar el nombre del cluster -> appName=ClusterTest
    //Credenciales al .env!
    static client = new MongoClient("mongodb+srv://USUARIO:CONTRASEÑA@clustertest.yjhytvq.mongodb.net/?appName=ClusterTest")

    //Recordar acceso desde todas las ips o registrar una por una
    //Para TODAS: 0.0.0.0/0
    //Acá se puede cambiar el nombre de acuerdo a la base de datos.
    static db = this.client.db("prueba");
}

export default MongoDBConnection;