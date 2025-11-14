import express from "express"
import ProductsRoutes from "./src/routes/Products.route.clases.js"
import dotenv from "dotenv"

//Esto permite tomar las variables de entorno del archivo .env
dotenv.config()

const app = express()
const PORT = process.env.PORT

//Desestructuración de las variables del .env
// const {PORT, PERSISTENCE} = process.env
// console.log(PORT, PERSISTENCE)

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api", new ProductsRoutes().start())

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
