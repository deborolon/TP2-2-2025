import express from "express"

const app = express()
const PORT = 8080

app.get("/", (req, res) =>{
    res.send("Hola!")
})

app.get("/api", (req, res) =>{
    res.send("Acá deberían existir datos...")
})

app.listen(PORT, () => console.log("Server running!"))