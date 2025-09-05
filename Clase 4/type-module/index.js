// import fs from "fs"
import api from "./api.js"
import http from "http"

let parseData;

async function getDataApi() {
    const dataApi = await api.fetchApi()
    parseData = await dataApi.json()
}

getDataApi()

//Crear servidor
const server = http.createServer((req, res) => {
    //REQ -> objeto de requerimento o solicitud
    //RES -> objeto de respuesta
    //GET: obtener, visualizar información
    //POST: añadir información
    //PUT: sobreescribe el total de la información
    //PATCH: sobreescribe un valor parcial
    //DELETE: elemina información
    const {url, method} = req
    console.log(url, method)

    if(method === "GET" && url === "/"){
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Bienvenidos!')
    } else if (method === "GET" && url === "/api"){
        //Encabezado
        res.writeHead(200, { 'Content-Type': 'application/json' })
        //Respuesta
        //Convierte a un string un objeto Javascript
        res.end(JSON.stringify(parseData))
    } else{
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Error, no especificado.')
    }
    
})

server.listen(8080, () => console.log("Server running..."))