import express from "express"

const app = express()
const PORT = 8080

//Endpoints -> puntos de acceso a nuestra API
//REQ -> siempre me trae información de la solicitud
//RES -> va a ser la respuesta generada por mi servidor

//Middleware -> función intermedia que existe entre la solicitud y la respuesta
//Habilita el envío de información por formularios
app.use(express.urlencoded({extended: true}))
//Parsea un objeto JSON a un objeto Javascript
app.use(express.json())

const products = [
    {id: 1, name: "Monitor", color: "Negro"},
    {id: 2, name: "Mouse", color: "Violeta"},
    {id: 3, name: "Notebook", color: "Gris"}
]

//app + verbo + ruta + callback + lógica dentro del callback + respuesta
// app.get("/", (req, res) => {
//     //Template Strings -> ALT + 96
//     res.send(`
//             <form action="/" method="POST">
//                 <label for="name">Nombre</label>
//                 <input name="name" type="text"></input>
//                 <button type="submit">Enviar</button>
//             </form>
//         `)
// })

// app.post("/", (req, res) => {
//     const name = req.body.name
//     console.log(name)
//     //REQ.BODY -> trae información desde el cuerpo de la solicitud
//     res.send(name)
// })

//GET -> obtiene información
app.get("/", (req, res) => {
    res.send("Ruta base.")
})

app.get("/products", (req, res) => {
    res.send(products)
    // res.json({method: "GET", data: products})
})

//GET -> en este caso por id, que se envíe un parámetro por url no significa que sea un POST
//los ":" aplican como variable dinámica
app.get("/products/:id", (req, res) => {
    //REQ.PARAMS -> es apartado "params" de la solicitud y permite obtener información via url
    // const { id, color } = req.params
    const { id } = req.params
    //cualquier cosa que viaje por req.params es un string
    //=== -> comparación estricta
    //== -> compara el valor, no el tipo
    //convierte a objeto primitivo Number -> Number(id)
    const prodById = products.find((e) => e.id == id)
    res.send(prodById)
})

//POST -> envía información
app.post("/products", (req, res) => {
    const prod = req.body
    products.push(prod)
    res.send(prod)
})

//PUT -> actualiza el total de la información
app.put("/products/:id", (req, res) => {
    //Desestructuring Object -> extraer valores a variables
    const { id } = req.params
    //const id = req.params.id
    //Payload -> cualquier información necesaria que viaje en el cuerpo de una solicitud
    const prod = req.body
    const index = products.findIndex((e) => e.id == id)
    if(index == -1){
        res.send("Error. No se encontró el id.")
    } else {
        prod.id = Number(id)
        products.splice(index, 1, prod)
        res.send(prod)
    }
})

app.listen(PORT, () => console.log("Server running..."))
