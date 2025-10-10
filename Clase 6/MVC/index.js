import express from "express"
import productsRoute from "./src/routes/products.route.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api", productsRoute)

app.listen(PORT, () => console.log("Server running..."))
