import express from "express"
// import productsRoute from "./src/routes/products.route.js"
import ProductsRoutes from "./src/routes/Products.route.clases.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// app.use("/api", productsRoute)
app.use("/api", new ProductsRoutes().start())


//Hoisting
// saludar()

// function saludar() {
//     console.log("Hola!")
// }

app.listen(PORT, () => console.log("Server running..."))
