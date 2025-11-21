import express from "express"
import ProductsRoutes from "./src/routes/Products.route.clases.js"
import dotenv from "dotenv"

//módulos de importación para la documentación
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { options } from "./docs/swagger.docs.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.json())
//Ruta para la documentación
const swaggerDocument = swaggerJsdoc(options)

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use("/api", new ProductsRoutes().start())

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
