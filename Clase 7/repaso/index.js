import express from "express"
import productsRoute from "../repaso/src/routes/products.route.js"

const app = express()
const PORT = 8080

//Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api", productsRoute)

app.listen(PORT, () => console.log("Server running..."))
