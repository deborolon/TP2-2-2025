//Javascript

//JavaScript es un lenguaje de programación interpretado, dinámico y de alto nivel,
//diseñado originalmente para ejecutarse en navegadores web. Es de tipado débil/dinámico,
//orientado a objetos mediante prototipos y basado en eventos. Permite manipular el DOM (Document Object Model),
//gestionar eventos, realizar peticiones asíncronas y crear aplicaciones web interactivas.
//Aunque nació como un lenguaje del lado del cliente, hoy también se usa en el servidor gracias a entornos
//como Node.js, lo que lo convierte en un lenguaje multipropósito ampliamente adoptado en el desarrollo web moderno.


console.log("Hola! Bienvenidos a TP2!")

//Anterior a ECMAScript 6
//VAR NO SE UTILIZA!!!
var x = 40
var y = 2
x = 15

//Operadores aritméticos
console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)

//ECMAScript 2015 - ES6
//LET
let saludo = "Hola"
saludo = "Hola a todos!"
saludo = true

//Let no se puede redeclarar, pero si pisar el valor original
//let saludo = "Hola pepe!"

//CONST
const cosa = "Termo"
//cosa = "Notebook"
//const cosa = 123
//No se puede pisar su valor original
console.log(cosa)

//Tipos de datos
let num = 19
let str = "Holaaaa"
let bool1 = true
let bool2 = false

//Estructuras
//Objeto = clave-valor
let obj = {
    1: "Amarillo",
    2: "Verde",
    3: "Azul",
    4: 19,
    "A": true
}

console.log(obj)

let arr = ["hola", "como", "va", 109, false, [1, 2, 3], null, undefined]

console.log(arr)

//Función tradicional
const nombre = "Debo"

function bienvenida(name) {
    console.log("Hola " + name + "!")
    //Template string -> ALT + 96
    console.log(`Hola ${name}!!!`)
}

bienvenida(nombre)

//Función flecha
const num1 = 20
const num2 = 10

const suma = () => {
    console.log(num1 + num2)
}

suma()

//Para subir mi código a Gihub (o cualquier repositorio)
//Primero consultar el status: git status
//Realizar una selección de los archivos a subir: git add ... / git add .
//Commitear es ponerle una identificación al código que estoy subiendo: git commit -m "blah blah"
//Para consultar los commits: git log
//Despliegue en la nube de mi código: git push origin "nombre de la rama" / git push origin main
