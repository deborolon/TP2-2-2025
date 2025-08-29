//Importación de módulos/dependencias/librerías
//Forma de importación tradicional: CommonJS
// const fs = require("fs")

//Forma de importación más actual: Module
import fs from "fs"

//Desestructuring Object
//Un método para extraer valores a variables

let a, b
// console.log(a);
[a, b] = ["esto es A", "esto es B"] 
console.log(a, b)

//SINCRONISMO
//Secuencial y bloqueante
console.log("----------INCIO FS Sincronico----------")
function fsSync() {
    const data = fs.readFileSync("doc.txt", "utf8")
    console.log(data)
    const newData = fs.writeFileSync("doc.txt", "Sobreescribiendo...")
    const data1 = fs.readFileSync("doc.txt", "utf8")
    console.log(data1)
}

fsSync()
console.log("----------FIN FS Sincronico----------")
console.log("FUERAA!")

//ASINCRONISMO
//No es bloqueante y puede realizar múltiples tareas a la vez

//Callback
//Función que se pasa a otra como parámetro

function callback(a, b, cb) {
    //return es una palabra reservada y permite que la función si o si retorne un valor
    return cb(a, b)
}
function suma(x, y) {
    return x + y
}

console.log(callback(10, 22, suma))

//Otro ejemplo de callbacks
setTimeout(()=> {
    console.log("Hola a todos!")
}, 3000)

setInterval(()=> {
    console.log("Holaaaa")
}, 6000)

console.log("----------INCIO FS CALLBACKS----------")
function fsCallbacks() {
    fs.readFile("doc.txt", "utf8", (err, data) => { 
        console.log("Data en FS: ", data)

        fs.writeFile("doc.txt", "Testeando...", (err, data) => {
            
            fs.readFile("doc.txt", "utf8", (err, data) => {
                console.log(data)
                
                fs.readFile("doc.txt", "utf8", (err, data) => {
                    console.log(data)

                    //CALBACK HELL: Nooooooooooo!!!
                    //No se puede mantener a largo plazo, es un problema la lectura de las respuestas o saber donde termina cada proceso
                    //Es poco perfomante porque tarda mucho más por cuanto más callbacks existan anidados
                    fs.readFile("doc.txt", "utf8", (err, data) => {
                        console.log(data)
                    })

                })
            })
        })
    })
}

fsCallbacks()
console.log("----------FIN FS CALLBACKS----------")

//PROMESAS
console.log("----------INICIO FS PROMESAS----------")
function fsPromises() {
    fs.promises.readFile("oc.txt", "utf8")
        //resolve
        .then((respuesta) => console.log(respuesta))
        .then(() => {
            fs.promises.writeFile("doc.txt", "FS con Promesas!")
        })
        .then(() => {
            fs.promises.readFile("doc.txt", "utf8")
            console.log("ASD")
        })
        //rejected
        .catch((error) => console.log("ERROR EN FSPROMISES!!! ", error))
        .finally(() => console.log("Mensaje u operación que se ejecuta siempre! Sin importar si el resultado es exitoso o no."))
}

fsPromises()
console.log("----------FIN FS PROMESAS----------")

//Async-Await
console.log("----------INICIO FS ASYNC AWAIT----------")
async function fsAsyncAwait() {
    const data = await fs.promises.readFile("doc.txt", "utf8") //Acá el await me evita el uso del .then y .catch
    console.log(data)
    const writeDoc = await fs.promises.writeFile("doc.txt", "FS CON ASYNC AWAIT!")
    const data1 = await fs.promises.readFile("doc.txt", "utf8")
    // const data1 = fs.promises.readFile("doc.txt", "utf8") -> sin el await no funciona!
    console.log("Línea 113: ", data1)
}

fsAsyncAwait()
console.log("----------FIN FS ASYNC AWAIT----------")

//Fetch -> es un método de Javascript para consultar APIs externas
async function fetchAPI() {
    const data = await fetch("https://httpstatusdogs.com/")
    console.log(data)
}

fetchAPI()